# jquery-rails

jQuery! For Rails! So great.

This gem provides:

  * jQuery 1.9.0
  * jQuery Migrate 1.1.0
  * jQuery UI 1.9.2 (javascript only)
  * the jQuery UJS adapter
  * assert_select_jquery to test jQuery responses in Ruby tests

## Versions

Starting with v2.1, the jquery-rails gem follows these version guidelines
to provide more control over your app's jquery version from your Gemfile:

```
patch version bump = updates to jquery-ujs, jquery-rails, and patch-level updates to jquery
minor version bump = minor-level updates to jquery
major version bump = major-level updates to jquery and updates to rails which may be backwards-incompatible
```

## Installation

Apps generated with Rails 3.1 or later include jquery-rails in the Gemfile by default. So just make a new app:

```sh
rails new myapp
```

If upgrading from an older version of rails, or for rails 3.0 apps,
add the jquery-rails gem to your Gemfile.

```ruby
gem "jquery-rails"
```

And run `bundle install`. The rest of the installation depends on
whether the asset pipeline is being used.

### Rails 3.1 or greater (with asset pipeline *enabled*)

The jquery and jquery-ujs files will be added to the asset pipeline and available for you to use. If they're not already in `app/assets/javascripts/application.js` by default, add these lines:

```js
//= require jquery
//= require jquery_ujs
```

For jQuery UI, we recommend the [jquery-ui-rails](https://github.com/joliss/jquery-ui-rails) gem, as it includes the jquery-ui css and allows easier customization. This gem still packages the jQuery UI javascript for compatibility. To use it, add the following line to your `application.js`:

```js
//= require jquery-ui
```

In order to use the themed parts of jQuery UI, you will also need to supply [your own theme CSS](http://jqueryui.com) (or use the jquery-ui-rails gem mentioned above).

### Rails 3.0 (or greater with asset pipeline *disabled*)

This gem adds a single generator: `jquery:install`. Running the generator will remove any Prototype JS files you may happen to have, and copy jQuery and the jQuery-ujs driver for Rails (and optionally, jQuery UI) to the `public/javascripts` directory.

This gem will also hook into the Rails configuration process, removing Prototype and adding jQuery to the javascript files included by the `javascript_include_tag(:defaults)` call. While this gem contains the minified and un-minified versions of jQuery and jQuery UI, only the minified versions will be included in the `:defaults` when Rails is run in `production` or `test` mode  (un-minified versions will be included when Rails is run in `development` mode).

To invoke the generator, run:

```sh
rails generate jquery:install #--ui to enable jQuery UI
```

You're done!

### jQuery Migrate

jQuery 1.9 removed or modified several APIs. To avoid breaking your scripts, [jQuery Migrate](https://github.com/jquery/jquery-migrate) was introduced. It will bring back all of the behaviour of jQuery 1.8 and optionally log calls to those removed or modified APIs. For details, see the [jQuery Core 1.9 Upgrade Guide](http://jquery.com/upgrade-guide/1.9/).

If you would like to include jQuery Migrate, you can add it in your `application.js` 

```js
//= require jquery-migrate.default-config
//= require jquery-migrate
```

`jquery-migrate.default-config` will disable logging of warning messages to the console for Rails' `test` and `production` environments. If you would like to customize this behaviour, omit the require directive and add your own configuration script, for example:

```js
(function() {
  var rails_env = "#{Rails.env}"; //.js.str extension required for this
  if(rails_env == 'test' || rails_env == 'production') {
    jQuery.migrateMute = true;
  }
})();
```

## Contributing

Feel free to open an issue ticket if you find something that could be improved. A couple notes:

* If it's an issue pertaining to the jquery-ujs javascript, please report it to the [jquery-ujs project](https://github.com/rails/jquery-ujs).

* If the jquery or jquery-ui scripts are outdated (i.e. maybe a new version of jquery was released yesterday), feel free to open an issue and prod us to get that thing updated. However, for security reasons, we won't be accepting pull requests with updated jquery or jquery-ui scripts.

## Acknowledgements

Many thanks are due to all of [the jquery-rails contributors](https://github.com/rails/jquery-rails/graphs/contributors). Special thanks to [JangoSteve](http://github.com/JangoSteve) for tirelessly answering questions and accepting patches, and the [Rails Core Team](https://github.com/organizations/rails/teams/617) for making jquery-rails an official part of Rails 3.1.

Copyright [André Arko](http://arko.net), released under the MIT License.
