# Jquery-rails

This gem provides jQuery 1.5.2 and the latest jQuery UJS adapter for Rails 3.1 and greater. The files will be added to the asset pipeline and available for you to use. For example, you can require them by adding these two lines to the file `app/assets/javascripts/application.js`:

    //= require jquery
    //= require jquery_ujs

Also provided is Sam Ruby's assert_select_jquery function, which is automatically required for use in tests.

### Installation

In your Gemfile, add this line:

    gem "jquery-rails"

Then, run `bundle install`. You're done!
