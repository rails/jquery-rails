require 'rails'

module Jquery
  module Generators
    class InstallGenerator < ::Rails::Generators::Base

      desc "This generator installs jQuery #{Jquery::Rails::JQUERY_VERSION}, jQuery-ujs, and (optionally) jQuery UI #{Jquery::Rails::JQUERY_UI_VERSION}"
      class_option :ui, :type => :boolean, :default => false, :desc => "Include jQueryUI"
      class_option :jquery_version, :type => :string, :default => false, :desc => "Version for Jquery"
      class_option :jquery_ui_version, :type => :string, :default => false, :desc => "Version for Jquery-UI"
      class_option :jquery_ujs_version, :type => :string, :default => false, :desc => "Version for Jquery-UJS Adapter"
      source_root File.expand_path('../../../../../vendor/assets/javascripts', __FILE__)

      def remove_prototype
        Rails::PROTOTYPE_JS.each do |name|
          remove_file "public/javascripts/#{name}.js"
        end
      end

      def copy_jquery
        say_status("copying", "jQuery (#{Jquery::Rails::JQUERY_VERSION})", :green)
        copy_file File.join("jquery", options.jquery_version || Jquery::Rails::JQUERY_VERSION, "jquery.js"), "public/javascripts/jquery.js"
        copy_file File.join("jquery", options.jquery_version || Jquery::Rails::JQUERY_VERSION, "jquery.min.js"), "public/javascripts/jquery.min.js"
      end

      def copy_jquery_ui
        if options.ui?
          say_status("copying", "jQuery UI (#{Jquery::Rails::JQUERY_UI_VERSION})", :green)
          copy_file File.join("jquery-ui", options.jquery_ui_version || Jquery::Rails::JQUERY_UI_VERSION, "jquery-ui.js"), "public/javascripts/jquery-ui.js"
          copy_file File.join("jquery-ui", options.jquery_ui_version || Jquery::Rails::JQUERY_UI_VERSION, "jquery-ui.min.js"), "public/javascripts/jquery-ui.min.js"
        end
      end

      def copy_ujs_driver
        say_status("copying", "jQuery UJS adapter (#{Jquery::Rails::JQUERY_UJS_VERSION[0..5]})", :green)
        remove_file "public/javascripts/rails.js"
        copy_file File.join("jquery-ujs", options.jquery_ujs_version || Jquery::Rails::JQUERY_UJS_VERSION, "jquery_ujs.js"), "public/javascripts/jquery_ujs.js"
      end

    end
  end
end if ::Rails.version < "3.1"
