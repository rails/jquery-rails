module Jquery
  module Rails
    class Railtie < ::Rails::Railtie
      config.before_configuration do
        if ::Rails.root.join("public/javascripts/jquery-ui.min.js").exist?
          jq_defaults = %w(jquery jquery-ui)
          jq_defaults.map!{|a| a + ".min" } unless ::Rails.env.development?
        else
          jq_defaults = ::Rails.env.development? ? %w(jquery) : %w(jquery.min)
        end
        config.action_view.javascript_expansions[:defaults] = jq_defaults + %w(rails)
      end
    end
  end
end
