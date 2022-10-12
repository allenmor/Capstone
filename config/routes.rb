Rails.application.routes.draw do
  resources :users
  resources :cards, only: [:create]
  post '/login', to: 'users#login'
  get '/me', to: 'users#me'
  get '/cardsbyuser', to: 'cards#user_cards'
  patch '/withdrawcards', to: 'cards#user_withdraw_cards'
  patch '/addMoney', to: 'users#add_money'
  patch '/withdrawmoney', to: 'users#withdraw_money'
end
