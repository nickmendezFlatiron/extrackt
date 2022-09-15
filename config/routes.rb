Rails.application.routes.draw do

  #sessions controller
  post "/login" , to: "sessions#login"
  delete "/logout", to: "sessions#destroy"

  post '/signup' ,  to: "users#create"
  get '/authorize', to "users#show"  
  

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

