require_relative 'test_helper'
require_relative '../lib/jquery/assert_select'

JAVASCRIPT_TEST_OUTPUT = <<-JS
  $("#id").show("blind", 1000);
  $("#id").html("<div><p>something</p></div>");
  jQuery("#id").replaceWith("<div><p>something</p></div>");
  $("<div><p>something</p></div>").appendTo("#id");
  jQuery("<div><p>something</p></div>").prependTo("#id");
  $("#id").remove();
  jQuery("#id").hide();
JS

class AssertSelectJQueryTest < ActiveSupport::TestCase
  include Rails::Dom::Testing::Assertions::SelectorAssertions
  attr_reader :response

  Assertion = Minitest::Assertion

  class FakeResponse
    attr_accessor :content_type, :body

    def initialize(content_type, body)
      @content_type, @body = content_type, body
    end
  end

  setup do
    @response = FakeResponse.new 'text/javascript', JAVASCRIPT_TEST_OUTPUT
  end

  def test_target_as_receiver
    skip
    assert_nothing_raised do
      assert_select_jquery 'show'
      assert_select_jquery 'html', 'div' do
        assert_select 'p', 'something'
      end
      assert_select_jquery 'replaceWith', 'div' do
        assert_select 'p', 'something'
      end
    end
  end

  def test_target_as_argument
    skip
    assert_nothing_raised do
      assert_select_jquery 'appendTo', 'div' do
        assert_select 'p', 'something'
      end
      assert_select_jquery 'prependTo', 'div' do
        assert_select 'p', 'something'
      end
    end
  end

  def test_argumentless
    skip
    assert_nothing_raised do
      assert_select_jquery 'remove'
      assert_select_jquery 'hide'
    end
  end

  protected

  def assert_failure(message, &block)
    e = assert_raises(Assertion, &block)
    assert_match(message, e.message) if message.is_a?(Regexp)
    assert_equal(message, e.message) if message.is_a?(String)
  end
end
