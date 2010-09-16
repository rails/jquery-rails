describe "jQuery-Rails" do
  def get_js_defaults(name)
    dir = File.expand_path("../support/#{name}_app", __FILE__)
    Dir.chdir(dir) do
      `bundle install --local`
      `rails runner 'puts Rails.application.config.action_view.
        javascript_expansions[:defaults].inspect'`.chomp
    end
  end

  it "changes the default javascript expansion" do
    get_js_defaults("default").should == ["jquery.min", "rails"].inspect
  end

  it "changes allows overriding the javascript expansion" do
    get_js_defaults("custom").should == ["foo", "bar", "baz"].inspect
  end

end