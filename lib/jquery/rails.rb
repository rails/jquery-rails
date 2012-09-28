if ::Rails.version < "3.1" || !::Rails.application.config.assets.enabled
  require 'jquery/rails/railtie'
else
  require 'jquery/rails/engine'
end
require 'jquery/rails/version'

module Jquery
  module Rails
    PROTOTYPE_JS = %w{prototype effects dragdrop controls}
  end
end
