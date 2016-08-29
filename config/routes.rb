Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :tracks, only: [:create, :index, :show, :destroy] do
      resources :annotations, only: [:create, :show, :update, :destroy]
    end
    resources :comments, only: [:create, :show, :update, :destroy]
    resources :votes, only: [:create]
  end
end
