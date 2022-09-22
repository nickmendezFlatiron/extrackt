Rails.application.routes.draw do
  #samples controller
  post '/samples/search' , to: "samples#search"
  resources :samples , only: [:show, :destroy]
  #sessions controller
  post "/login" , to: "sessions#login"
  delete "/logout", to: "sessions#destroy"

  #users controller
  resources :users , only: [:update, :destroy]
  post '/signup' ,  to: "users#create"
  get '/authorize', to: "users#show"  
  
  #collections controller
  resources :collections , only: [:create, :show, :destroy]
  get '/marketplace/recent', to: "collections#recent"
  get '/marketplace/popular', to: "collections#popular"
  get 'user/:user_id/collections', to: "collections#index"
  get 'user/:user_id/collections/:collection_id', to: "collections#show"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

