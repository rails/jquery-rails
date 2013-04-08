if defined? ::Rails
  require 'jquery/assert_select' if ::Rails.env.test?
  require 'jquery/rails/engine' if ::Rails.version >= '3.1'
  require 'jquery/rails/railtie'
end

require 'jquery/rails/version'

module Jquery
  module Rails
    PROTOTYPE_JS = %w{prototype effects dragdrop controls}
  end
end
