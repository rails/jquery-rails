require 'jquery/assert_select' if ::Rails.env.test?
require 'jquery/rails/railtie'
require 'jquery/rails/version'

module Jquery
  module Rails
    PROTOTYPE_JS = %w{prototype effects dragdrop controls}
  end
end
