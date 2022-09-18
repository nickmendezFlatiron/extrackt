source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.3", ">= 7.0.3.1"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem "rack-cors"
gem 'bootsnap', '>= 1.4.4', require: false

# User added gem files
gem 'active_model_serializers', "~> 0.10.13"
gem 'rails_serve_static_assets'
gem 'bcrypt', '~> 3.1', '>= 3.1.11'
gem 'foreman'

# Cloud Storage 
gem 'activestorage', '~> 7.0', '>= 7.0.4'
gem 'activestorage-validator', '~> 0.2.2'
gem "aws-sdk-s3", require: false

#Faker Gem
gem 'faker'

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
   gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

