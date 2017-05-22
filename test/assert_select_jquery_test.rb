require_relative 'test_helper'
require_relative '../lib/jquery/assert_select'
class AssertSelectJQueryTest < ActiveSupport::TestCase
  include Rails::Dom::Testing::Assertions::SelectorAssertions
  attr_reader :response

  JAVASCRIPT_TEST_OUTPUT = <<-JS
    $("#card").show("blind", 1000);
    $("#id").html('<div><p>something</p></div>');
    $('#card').html('<div><p>something else</p></div>');
    jQuery("#id").replaceWith("<div><p>something</p></div>");
    $("<div><p>something</p></div>").appendTo("#id");
    $("<div><p>something else</p></div>").appendTo("#id");
    jQuery("<div><p>something</p></div>").prependTo("#id");
    $('#id').remove();
    jQuery("#id").hide();
    $("[data-placeholder~=name]").remove();
    $("#cart tr:not(.total_line) > *").remove();
    $("[href|=\"val\"][href$=\"val\"][href^=\"val\"]").remove();
    $("tr + td, li").remove();
    $("#card").hide("blind", 100, function() {
      $("#content").html('<div><p>something</p></div>');
    });
    $("#card").hide("bounce", 100, function() {
      $("#content").html('<div><p>animating hide</p></div>');

      $("#card").show("bounce", 100, function() {
        $("#content").html('<div><p>animating show</p></div>');
      });
    });
  JS

  setup do
    @response = OpenStruct.new(content_type: 'text/javascript', body: JAVASCRIPT_TEST_OUTPUT)
  end

  def test_target_as_receiver
    assert_nothing_raised do
      assert_select_jquery :show, :blind, '#card'
      assert_select_jquery :html, '#id' do
        assert_select 'p', 'something'
      end
      assert_select_jquery :replaceWith, '#id' do
        assert_select 'p', 'something'
      end
      assert_select_jquery :remove, "[data-placeholder~=name]"
      assert_select_jquery :remove, "#cart tr:not(.total_line) > *"
      assert_select_jquery :remove, "[href|=\"val\"][href$=\"val\"][href^=\"val\"]"
      assert_select_jquery :remove, "tr + td, li"

      # These allow to assert correct execution order in addition to simple execution assertion
      assert_select_jquery :hide, :bounce, '#card' do
        # assert multiple jquery calls within different callbacks
        assert_select_jquery :html, '#content' do
          assert_select 'p', 'something'
          assert_select 'p', 'animating hide'
        end

        # assert callback-nested jquery calls
        assert_select_jquery :show, :bounce, '#card' do
          assert_select_jquery :html, '#content' do
            assert_select 'p', 'animating show'
          end
        end
      end
    end

    assert_raise Minitest::Assertion, "No JQuery call matches [:show, :some_wrong]" do
      assert_select_jquery :show, :some_wrong
    end

    assert_raise Minitest::Assertion, "<something else> was expected but was <something>" do
      assert_select_jquery :html, '#id' do
        assert_select 'p', 'something else'
      end
    end

    assert_raise Minitest::Assertion, "This function can't have a callback" do
      assert_select_jquery(:show, :blind, '#card') { }
    end
  end

  def test_target_as_argument
    assert_nothing_raised do
      assert_select_jquery :appendTo, '#id' do
        assert_select 'p', 'something'
        assert_select 'p', 'something else'
      end
      assert_select_jquery :prependTo, '#id' do
        assert_select 'p', 'something'
      end
    end

    assert_raise Minitest::Assertion, 'No JQuery call matches [:prependTo, "#wrong_id"]' do
      assert_select_jquery :prependTo, '#wrong_id'
    end
  end

  def test_argumentless
    assert_nothing_raised do
      assert_select_jquery :remove
      assert_select_jquery :hide
    end

    assert_raise Minitest::Assertion, "This function can't have HTML argument" do
      assert_select_jquery(:remove) { }
    end

    assert_raise Minitest::Assertion, 'No JQuery call matches [:wrong_function]' do
      assert_select_jquery :wrong_function
    end
  end
end
