module Jquery
  module Rails
    PROTOTYPE_JS = %w{prototype effects dragdrop controls}

    if ::Rails.version < "3.1"
      require 'jquery/rails/railtie'
    else
      require 'jquery/rails/engine'
    end
  end
end
