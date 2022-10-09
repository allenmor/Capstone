Rails.application.routes.draw do
  resources :users

  post '/login', to: 'users#login'
  get '/me', to: 'users#me'
end
