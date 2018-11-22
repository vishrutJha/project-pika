Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "pages#home"
  get "code", to: "pages#code"
  get "quest", to: "pages#quest"
  get "game", to: "pages#game"
  get "pika", to: "pages#pika"
  get "next_question", to: "pages#next_question"
  post "answer", to: "pages#answer"

  root "pages#home"
end
