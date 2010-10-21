require 'spec_helper'

describe "The jQuery-Rails railtie" do

  it "changes the default javascript expansion" do
    get_js_defaults("default").should == ["jquery.min", "rails"].inspect
  end

  it "uses non-minified js in development" do
    get_js_defaults("default", "development").should == %w(jquery rails).inspect
  end

  it "changes allows overriding the javascript expansion" do
    get_js_defaults("custom").should == ["foo", "bar", "baz"].inspect
  end

  it "ouputs with .js extensions in production" do
    get_javascript_include_tag("default").should =~ /jquery.min.js/
  end

  it "outputs with .js extensions in development" do
    get_javascript_include_tag("default", "development").should =~ /jquery.js/
  end


  # Helper methods

  def get_js_defaults(app, env = "production")
    cmd = "Rails.application.config.action_view.
      javascript_expansions[:defaults]"
    run(app, cmd, env)
  end

  def get_javascript_include_tag(app, env = "production")
    cmd = "Rails.application.config.action_controller.
      each{|k,v| ActionController::Base.helpers.config[k]=v} &&
      ActionController::Base.helpers.javascript_include_tag(:defaults)"
    run(app, cmd, env)
  end

  def run(app, expr, env)
    dir = File.expand_path("../../support/#{app}_app", __FILE__)
    Dir.chdir(dir) do
      `bundle check || bundle install --local`
      cmd = "rails runner -e #{env} 'puts #{expr}.inspect'"
      `#{cmd}`.chomp
    end
  end

end