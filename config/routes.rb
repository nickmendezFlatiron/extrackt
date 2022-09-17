Rails.application.routes.draw do

  #sessions controller
  post "/login" , to: "sessions#login"
  delete "/logout", to: "sessions#destroy"

  #users controller
  resources :users , only: [:update]
  post '/signup' ,  to: "users#create"
  get '/authorize', to: "users#show"  
  
  #collections controller
  resources :collections , only: [:create]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

