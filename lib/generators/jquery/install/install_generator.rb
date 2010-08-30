module Jquery
  module Generators
    class InstallGenerator < ::Rails::Generators::Base
      desc "This generator downloads and installs jQuery, jQuery-ujs HEAD, and (optionally) jQuery UI 1.8.4"
      class_option :ui, :type => :boolean, :default => false, :desc => "Indicates when to Include JQueryUI (minified version; source: Google Libraries API)"
      class_option :version, :type => :string, :default => "1.4.2", :desc => "Indicates which version of JQuery to fetch (source: Google Libraries API)"
      @@versions = %w( 1.4.2 1.4.1 1.4.0 1.3.2 1.3.1 1.3.0 1.2.6 )


      def remove_prototype
        %w(controls.js dragdrop.js effects.js prototype.js).each do |js|
          remove_file "public/javascripts/#{js}"
        end
      end

      def download_jquery
        # Downloading latest jQuery
        if @@versions.include?(options.version)
          puts "Fetching the version #{options.version} of JQuery!"
          get "http://ajax.googleapis.com/ajax/libs/jquery/#{options.version}/jquery.min.js", "public/javascripts/jquery.min.js"
          get "http://ajax.googleapis.com/ajax/libs/jquery/#{options.version}/jquery.js", "public/javascripts/jquery.js"
        else
          puts "Version #{options.version} is not a valid version; fetching the #{@@versions[0]} (default) version of JQuery!"
          get "http://ajax.googleapis.com/ajax/libs/jquery/#{@@versions[0]}/jquery.min.js", "public/javascripts/jquery.min.js"
          get "http://ajax.googleapis.com/ajax/libs/jquery/#{@@versions[0]}/jquery.js", "public/javascripts/jquery.js"
        end

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