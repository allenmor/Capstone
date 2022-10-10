Rails.application.routes.draw do
  resources :users
  resources :cards, only: [:create]
  post '/login', to: 'users#login'
  get '/me', to: 'users#me'
end
