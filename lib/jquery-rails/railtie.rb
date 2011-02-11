# Configure Rails 3.0 to use public/javascripts/jquery et al
module Jquery
  module Rails

    class Railtie < ::Rails::Railtie
      config.before_configuration do
        require "jquery-rails/assert_select_jquery" if ::Rails.env.test?

        if ::Rails.root.join("public/javascripts/jquery-ui.min.js").exist?
          jq_defaults = %w(jquery jquery-ui)
          jq_defaults.map!{|a| a + ".min" } if ::Rails.env.production?
        else
          jq_defaults = ::Rails.env.production? ? %w(jquery.min) : %w(jquery)
        end

        # Merge the jQuery scripts, remove the Prototype defaults and finally add 'rails'
        # at the end, because load order is important
        config.action_view.javascript_expansions[:defaults] -= PROTOTYPE_JS + ['rails']
        config.action_view.javascript_expansions[:defaults] |= jq_defaults
        config.action_view.javascript_expansions[:defaults] << 'rails'
      end
    end

  end
end