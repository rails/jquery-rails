require 'rails'

module Jquery
  module Generators
    class InstallGenerator < ::Rails::Generators::Base
      desc "This generator downloads and installs jQuery, jQuery-ujs HEAD, and (optionally) the newest jQuery UI"
      class_option :ui, :type => :boolean, :default => false, :desc => "Include jQueryUI"
      class_option :version, :type => :string, :default => "1.6", :desc => "Which version of jQuery to fetch"
      @@default_version = "1.6"

      def remove_prototype
        %w(controls.js dragdrop.js effects.js prototype.js).each do |js|
          remove_file "public/javascripts/#{js}"
        end
      end

      def download_jquery
        say_status("fetching", "jQuery (#{options.version})", :green)
        get_jquery(options.version)
      rescue OpenURI::HTTPError
        say_status("warning", "could not find jQuery (#{options.version})", :yellow)
        say_status("fetching", "jQuery (#{@@default_version})", :green)
        get_jquery(@@default_version)
      end

      def download_jquery_ui
        if options.ui?
          say_status("fetching", "jQuery UI (latest 1.x release)", :green)
          get "http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.js",     "public/javascripts/jquery-ui.js"
          get "http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js", "public/javascripts/jquery-ui.min.js"
        end
      end

      def download_ujs_driver
        say_status("fetching", "jQuery UJS adapter (github HEAD)", :green)
        get "https://github.com/rails/jquery-ujs/raw/master/src/rails.js", "public/javascripts/rails.js"
      end

    private

      def get_jquery(version)
        get "http://ajax.googleapis.com/ajax/libs/jquery/#{version}/jquery.js",     "public/javascripts/jquery.js"
        get "http://ajax.googleapis.com/ajax/libs/jquery/#{version}/jquery.min.js", "public/javascripts/jquery.min.js"
      end

    end
  end
end if ::Rails.version < "3.1"
