module Jquery
  module Generators
    class InstallGenerator < Rails::Generators::Base
      desc "This generator downloads and installs jQuery 1.4.2, jQuery-ujs HEAD, and (optionally) jQuery UI 1.8.4"
      class_option :ui, :type => :boolean, :default => false, :desc => "Indicates when to Include JQueryUI (minified version; source: Google Libraries API)"

      def remove_prototype
        %w(controls.js dragdrop.js effects.js prototype.js rails.js).each do |js|
          remove_file "public/javascripts/#{js}"
        end
      end

      def download_jquery
        # Downloading latest jQuery
        get "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js", "public/javascripts/jquery.min.js"
        get "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js", "public/javascripts/jquery.js"

        # Downloading latest jQueryUI minified
        get "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.4/jquery-ui.min.js", "public/javascripts/jquery-ui.min.js" if options.ui?
        get "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.4/jquery-ui.js", "public/javascripts/jquery-ui.js" if options.ui?
      end

      def download_ujs_driver
        # Downloading latest jQuery drivers
        get "http://github.com/rails/jquery-ujs/raw/master/src/rails.js", "public/javascripts/rails.js"
      end

    end
  end
end
