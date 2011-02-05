# Jquery-rails

This gem adds a single generator to Rails 3, jquery:install. Running the generator will remove any Prototype JS files you may happen to have, fetch jQuery and the jQuery-ujs driver for Rails, and (optionally) fetch jQuery UI.

The gem will also hook into the Rails configuration process, removing Prototype and adding jQuery to the javascript files included by the `javascript_include_tag(:defaults)` call. While the plugin downloads minified and un-minified versions of jQuery and jQuery UI, only the minified versions are included in :default.

### Installation

In your Gemfile, add this line:

    gem "jquery-rails"

Then, run `bundle install`. To invoke the generator, run:

    rails generate jquery:install #--ui to enable jQuery UI --version to install specific version of JQuery (default is 1.5)

You're done! Don't forget to output `csrf_meta_tag` somewhere inside your `<head>` tag in your layout!

### Edge rails

If you're using edge Rails, everything should just work starting with version 0.2.2. If it's not working, try running `bundle update jquery-rails`, or change your Gemfile to read `gem "jquery-rails", "~>0.2"`.