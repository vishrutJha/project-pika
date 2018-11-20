class PagesController < ApplicationController
  def home
  end

  #GET /code.json 
  def code
    result = false
    result = true if params[:code] == "101017"
    render json: {result: result}
  end

  def quest
  end
end
