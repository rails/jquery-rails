source 'https://rubygems.org'

gem 'rails', group: :test
gem "mime-types", "< 3", group: :test

if RUBY_VERSION > '2.2.2'
  gem 'rack'
else
  gem 'rack', '~>1.6'
end
if RUBY_VERSION > '2'
  gem 'json', '>= 2'
else
  gem 'json', '~> 1.8.0'
end

# Specify your gem's dependencies in jquery-rails.gemspec
gemspec
