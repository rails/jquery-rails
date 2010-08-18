module Jquery
  module Rails
    class Railtie < ::Rails::Railtie
        if ::Rails.root.join("javascripts/jquery-ui.min.js").exist?
      config.before_initialize do
          config.action_view.javascript_expansions[:defaults] = %w(jquery.min jquery-ui.min rails)
        else
          config.action_view.javascript_expansions[:defaults] = %w(jquery.min rails)
        end
      end
    end
  end
end
