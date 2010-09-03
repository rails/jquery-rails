# -*- encoding: utf-8 -*-
require File.expand_path('../lib/jquery-rails/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = "jquery-rails"
  s.version     = Jquery::Rails::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["André Arko"]
  s.email       = ["andre@arko.net"]
  s.homepage    = "http://rubygems.org/gems/jquery-rails"
  s.summary     = "Use jQuery with Rails 3"
  s.description = "This gem provides a Rails generator to install jQuery and the jQuery-ujs driver into your Rails 3 application, and then have them included automatically instead of Prototype."

  s.required_rubygems_version = ">= 1.3.6"
  s.rubyforge_project         = "jquery-rails"

  s.add_dependency "rails", "~> 3.0.0"
  s.add_development_dependency "bundler", "~> 1.0.0"

  s.files        = `git ls-files`.split("\n")
  s.executables  = `git ls-files`.split("\n").select{|f| f =~ /^bin/}
  s.require_path = 'lib'
end