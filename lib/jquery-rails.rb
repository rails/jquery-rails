module Jquery
  PROTOTYPE_JS = %w{prototype effects dragdrop controls}

  module Rails
    if ::Rails.version < "3.1"
      require 'jquery-rails/railtie'
    else
      require 'jquery-rails/engine'
    end
  end

end
