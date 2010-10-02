# Jquery-rails

This gem adds a single generator to Rails 3, jquery:install. Running the generator will remove any Prototype JS files you may happen to have, fetch jQuery and the jQuery-ujs driver for Rails, and (optionally) fetch jQuery UI.

The gem will also hook into the Rails configuration process, removing Prototype and adding jQuery to the javascript files included by the `javascript_include_tag(:defaults)` call. While the plugin downloads minified and un-minified versions of jQuery and jQuery UI, only the minified versions are included in :default.

### Installation

In your Gemfile, add this line:

    gem "jquery-rails"

Then, run `bundle install`. To invoke the generator, run:

    rails generate jquery:install #--ui to enable jQuery UI --version to install specific version of JQuery (default is 1.4.2)

You're done! Don't forget to output `csrf_meta_tag` somewhere inside your `<head>` tag in your layout!

### Edge rails

If you're using edge Rails, you'll need to use the branch that depends on Rails `~> 3.1`. Here's the line to put in your Gemfile, and everything else is the same:

    gem "jquery-rails", :git => "http://github.com/indirect/jquery-rails.git", :branch => "rails-3-1"