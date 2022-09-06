# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

Rails.application.load_tasks

namespace :start do
  task :development do
    exec 'cd client && foreman start -f Procfile'
  end
desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true npm run clientbuild && cd client'
  end
end
desc 'Start development server'
task :start => 'start:development'