Rails.application.routes.draw do

  resources :users, only: [:index, :show]

  # java script (fetch url) | rails (controller/method)

  post '/signin', to: 'users#signin'

  get '/validate', to: 'users#validate'

  get '/transactions', to: 'transactions#index'

  get '/allstocks', to: 'allstocks#index'

  get '/savingpots', to: 'saving_pots#index'

  get '/inventory', to: 'users#inventory'

  post '/signup', to: 'users#signup'


end
