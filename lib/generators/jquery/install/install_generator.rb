require 'rails'

module Jquery
  module Generators
    class InstallGenerator < ::Rails::Generators::Base
      @@jquery_version = "1.6"
      @@jquery_ui_version = "1.8.12"
      @@jquery_ujs_version = "a634e7507d45249731b79a801034097e330d27d1"
      desc "This generator installs jQuery #{@@jquery_version}, jQuery-ujs, and (optionally) jQuery UI #{@@jquery_ui_version}"
      class_option :ui, :type => :boolean, :default => false, :desc => "Include jQueryUI"
      class_option :version, :type => :string, :default => @@jquery_version, :desc => "Which version of jQuery to fetch"
      source_root File.expand_path('../../../../../vendor/assets/javascripts', __FILE__)

      def remove_old_javascripts
        %w(controls.js dragdrop.js effects.js prototype.js).each do |js|
          remove_file "public/javascripts/#{js}"
        end
      end

      def copy_jquery
        say_status("copying", "jQuery (#{@@jquery_version})", :green)
        copy_file "jquery.js", "public/javascripts/jquery.js"
        copy_file "jquery.min.js", "public/javascripts/jquery.min.js"
      end

      def copy_jquery_ui
        if options.ui?
          say_status("copying", "jQuery UI (#{@@jquery_ui_version})", :green)
          copy_file "jquery-ui.js", "public/javascripts/jquery-ui.js"
          copy_file "jquery-ui.min.js", "public/javascripts/jquery-ui.min.js"
        end
      end

      def copy_ujs_driver
        say_status("copying", "jQuery UJS adapter (#{@@jquery_ujs_version[0..5]})", :green)
        copy_file "jquery_ujs.js", "public/javascripts/jquery_ujs.js"
      end

    end
  end
end if ::Rails.version < "3.1"
