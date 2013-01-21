module Jquery
  module Rails
    def self.read_version(file, pattern)
      dir  = File.expand_path('../../../../vendor/assets/javascripts', __FILE__)
      file = File.join(dir, file)
      File.open(file) do |io|
        match = io.read.match(pattern)
        raise "Can't read version from #{file}" unless match
        return match[1]
      end
    end

    VERSION = "2.2.0"
    JQUERY_VERSION     = read_version('jquery.js', /jQuery [^\n]+ v([^\s]+)/)
    JQUERY_UI_VERSION  = read_version('jquery-ui.js', /jQuery UI - v([^\s]+)/)
    JQUERY_UJS_VERSION = "bddff6a677edc54f00e48bde740b0b22d68deef6"
  end
end
