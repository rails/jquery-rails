module Jquery
  module Rails

    if ::Rails.version < "3.1"
      require 'jquery-rails/railtie'
    else
      require 'jquery-rails/engine'
    end

  end
end
