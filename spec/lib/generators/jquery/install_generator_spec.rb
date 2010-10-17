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
    @response = {:body => "abc", :status => 200,  :headers => { 'Content-Length' => 3 } }
    stub_request(:get, /ajax.googleapis.com|github.com/).to_return(@response)
  end

  it "should install jquery" do
    run_generator

    %w(jquery.min.js jquery.js rails.js).each { |js| assert_file "public/javascripts/#{js}" }
    %w(controls.js dragdrop.js effects.js prototype.js).each { |js| assert_no_file "public/javascripts/#{js}" }
  end

  it "should install jquery-ui when asked" do
    run_generator %w(--ui)

    %w(jquery.min.js jquery.js jquery-ui.min.js jquery-ui.js rails.js).each { |js| assert_file "public/javascripts/#{js}" }
    %w(controls.js dragdrop.js effects.js prototype.js).each { |js| assert_no_file "public/javascripts/#{js}" }
  end
end
