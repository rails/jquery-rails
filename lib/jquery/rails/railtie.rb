# Used to ensure that Rails 3.0.x, as well as Rails >= 3.1 with asset pipeline disabled
# get the minified version of the scripts included into the layout in production.
module Jquery
  module Rails
    class Railtie < ::Rails::Railtie
      config.before_configuration do
        if config.respond_to?('action_view') && config.action_view.javascript_expansions
          jq_defaults = ::Rails.env.production? || ::Rails.env.test? ? %w(jquery.min) : %w(jquery)

          # Merge the jQuery scripts, remove the Prototype defaults and finally add 'jquery_ujs'
          # at the end, because load order is important
          config.action_view.javascript_expansions[:defaults] -= PROTOTYPE_JS + ['rails']
          config.action_view.javascript_expansions[:defaults] |= jq_defaults + ['jquery_ujs']
        end
      end
    end
  end
end
