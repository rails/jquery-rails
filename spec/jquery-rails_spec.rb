describe "jQuery-Rails" do
  def get_js_defaults(name, env = "production")
    dir = File.expand_path("../support/#{name}_app", __FILE__)
    Dir.chdir(dir) do
      `bundle install --local`
      `rails runner -e #{env} 'puts Rails.application.config.action_view.
        javascript_expansions[:defaults].inspect'`.chomp
    end
  end

  it "changes the default javascript expansion" do
    get_js_defaults("default").should == ["jquery.min", "rails"].inspect
  end

  it "uses non-minified js in development" do
    get_js_defaults("default", "development").should == %w(jquery rails).inspect
  end

  it "changes allows overriding the javascript expansion" do
    get_js_defaults("custom").should == ["foo", "bar", "baz"].inspect
  end

end