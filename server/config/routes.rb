Rails.application.routes.draw do

  resources :users, only: [:index, :show]

  # java script (fetch url) | rails (controller/method)

  post '/signin', to: 'users#signin'

  get '/validate', to: 'users#validate'

  get '/transactions', to: 'transactions#index'

  get '/allstocks', to: 'allstocks#index'

  get '/savingpots', to: 'saving_pots#index'

  post '/savingpots', to: 'saving_pots#createPot'

  get '/inventory', to: 'users#inventory'

  post '/signup', to: 'users#signup'

  post '/transactions', to: 'transactions#createTransaction'

  get '/savingpots/:id', to: 'saving_pots#show'

  delete '/savingpots/:id', to: 'saving_pots#deletePot'

  # graphs 

  post '/transaction_sum', to: 'transactions#allTransactionsSum'

  post '/transaction_category', to: 'transactions#allTransactionsByCategory'

  post '/sum_year' , to: 'transactions#sumOfEachYear'

  post '/year_category' , to: 'transactions#sumOfEachCategoryForEachYear'

  post '/month_sum' , to: 'transactions#sumOfEachMonth'

  post '/month_category' , to: 'transactions#sumOfEachCategoryFromEachMonth'


  


  


  
  






end
