require 'bundler'
Bundler::GemHelper.install_tasks

# Check if versions are correct between VERSION constants and .js files
#
task :release => [:guard_version]

task :guard_version do
  def check_version(file, pattern, constant)
    body = File.read("vendor/assets/javascripts/#{file}")
    match = body.match(pattern) or abort "Version check failed: no pattern matched in #{file}"
    file_version = body.match(pattern)[1]
    constant_version = Jquery::Rails.const_get(constant)

    unless constant_version == file_version
      abort "Jquery::Rails::#{constant} was #{constant_version} but it should be #{file_version}"
    end
  end

  check_version('jquery.js', /jQuery JavaScript Library v([\S]+)/, 'JQUERY_VERSION')
end

task :update_jquery do
  puts "Downloading jquery.js"
  puts `curl -o vendor/assets/javascripts/jquery.js http://code.jquery.com/jquery.js`
  puts "Downloading jquery.min.js"
  puts `curl -o vendor/assets/javascripts/jquery.min.js http://code.jquery.com/jquery.min.js`
  puts "Downloading jquery.min.map"
  puts `curl -o vendor/assets/javascripts/jquery.min.map http://code.jquery.com/jquery.min.map`

  puts "Updating version.rb"
  version = false
  File.foreach('vendor/assets/javascripts/jquery.js') do |line|
    version = line.match(/jQuery JavaScript Library v([\S]+)/)
    version = version && version[1]
    break if version
  end

  version_path = 'lib/jquery/rails/version.rb'
  lines = IO.readlines(version_path).map do |line|
    line.gsub(/JQUERY_VERSION = "([\d\.]+)"/, "JQUERY_VERSION = \"#{version}\"")
  end
  File.open(version_path, 'w') do |file|
    file.puts lines
  end

  puts "\e[32mDone!\e[0m"
end
