Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "pages#home"
  get "code", to: "pages#code"
  get "quest", to: "pages#quest"
end
