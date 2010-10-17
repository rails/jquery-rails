require 'spec/test/unit'
require 'spec_helper'
require 'generators/jquery/install/install_generator'

class Jquery::Generators::InstallGeneratorTest < Rails::Generators::TestCase
  describe "The jQuery generator"

  destination File.join(Rails.root)
  tests Jquery::Generators::InstallGenerator
  arguments []

  before(:each) do
    prepare_destination
    @response = {:body => "abc", :status => 200}
    stub_request(:get, /ajax.googleapis.com|github.com/).to_return(@response)
  end

  it "should remove prototype" do
    run_generator
    %w(controls.js dragdrop.js effects.js prototype.js).each { |js| assert_no_file "public/javascripts/#{js}" }
  end

  it "should install the rails ujs shim" do
    run_generator
    assert_file "public/javascripts/rails.js"
  end

  it "should install jquery" do
    run_generator
    %w(jquery.min.js jquery.js).each { |js| assert_file "public/javascripts/#{js}" }
  end

  it "should install old jquery versions" do
    run_generator %w(--version 1.4.2)
    %w(jquery.min.js jquery.js).each { |js| assert_file "public/javascripts/#{js}" }
  end

  it "should try to install unknown jquery versions with fallback" do
    stub_request(:get, /ajax.googleapis.com/).
      to_return(:status => 404, :body => "No").
      to_return(@response)
    run_generator %w(--version 100.0)
    %w(jquery.min.js jquery.js).each { |js| assert_file "public/javascripts/#{js}" }
  end

  it "should install jquery-ui when asked" do
    run_generator %w(--ui)
    %w(jquery-ui.min.js jquery-ui.js).each { |js| assert_file "public/javascripts/#{js}" }
  end
end
