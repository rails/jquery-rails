module Jquery
  module Generators
    class InstallGenerator < ::Rails::Generators::Base
      desc "This generator downloads and installs jQuery, jQuery-ujs HEAD, and (optionally) jQuery UI 1.8.4"
      class_option :ui, :type => :boolean, :default => false, :desc => "Whether to Include JQueryUI"
      class_option :version, :type => :string, :default => "1.4.1", :desc => "Which version of JQuery to fetch"
      @@versions = %w( 1.4.3 1.4.2 1.4.1 1.4.0 1.3.2 1.3.1 1.3.0 1.2.6 )


      def remove_prototype
        %w(controls.js dragdrop.js effects.js prototype.js).each do |js|
          remove_file "public/javascripts/#{js}"
        end
      end

      def download_jquery
        # Downloading latest jQuery
        if @@versions.include?(options.version)
          puts "Fetching JQuery version #{options.version}!"
          get "http://ajax.googleapis.com/ajax/libs/jquery/#{options.version}/jquery.min.js", "public/javascripts/jquery.min.js"
          get "http://ajax.googleapis.com/ajax/libs/jquery/#{options.version}/jquery.js", "public/javascripts/jquery.js"
        else
          # Try to get it anyway
          begin
            puts "Trying to fetch JQuery version #{options.version}, even though I don't know about it.'"
            get "http://ajax.googleapis.com/ajax/libs/jquery/#{options.version}/jquery.min.js", "public/javascripts/jquery.min.js"
            get "http://ajax.googleapis.com/ajax/libs/jquery/#{options.version}/jquery.js", "public/javascripts/jquery.js"
            puts "Success"
          rescue
            puts "JQuery #{options.version} is invalid; fetching #{@@versions[2]} instead."
            get "http://ajax.googleapis.com/ajax/libs/jquery/#{@@versions[2]}/jquery.min.js", "public/javascripts/jquery.min.js"
            get "http://ajax.googleapis.com/ajax/libs/jquery/#{@@versions[2]}/jquery.js", "public/javascripts/jquery.js"
          end
        end

        # Downloading latest jQueryUI minified
        get "http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js", "public/javascripts/jquery-ui.min.js" if options.ui?
        get "http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.js", "public/javascripts/jquery-ui.js" if options.ui?
      end

      def download_ujs_driver
        # Downloading latest jQuery drivers
        get "http://github.com/rails/jquery-ujs/raw/master/src/rails.js", "public/javascripts/rails.js"
      end

    end
  end
end