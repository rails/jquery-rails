# -*- encoding: utf-8 -*-
require File.expand_path('../lib/jquery-rails/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = "jquery-rails"
  s.version     = Jquery::Rails::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = []
  s.email       = []
  s.homepage    = "http://rubygems.org/gems/jquery-rails"
  s.summary     = "TODO: Write a gem summary"
  s.description = "TODO: Write a gem description"

  s.required_rubygems_version = ">= 1.3.6"
  s.rubyforge_project         = "jquery-rails"

  s.add_dependency "rails", "~>3.0.0.rc"
  s.add_development_dependency "bundler", ">= 1.0.0.rc.6.pre"

  s.files        = `git ls-files`.split("\n")
  s.executables  = `git ls-files`.split("\n").select{|f| f =~ /^bin/}
  s.require_path = 'lib'
end