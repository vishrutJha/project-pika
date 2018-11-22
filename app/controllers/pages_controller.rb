class PagesController < ApplicationController
  before_action :set_quest, only: [:quest, :next_question, :answer]
  skip_before_action :verify_authenticity_token, only: [:answer]

  def home
  end

  #GET /code.json 
  def code
    result = false
    if params[:code] == "101017"
      result = true 
      as = AnswerSession.create(key: rand_str)
      session[:key] = as.key
    end
    render json: {result: result}
  end

  def quest
    redirect_to root_path and return if @answer_sess.blank?
  end

  def next_question
    redirect_to root_path and return if @answer_sess.blank?
    answered = @answer_sess.answers.map(&:question_id)
    @question = Question.where(:id.nin => answered ).first
    if @question.blank?
      render partial: "summary" and return
    end
    render partial: "next_question"
  end

  def answer
    question = Question.find(params[:question])
    ans = @answer_sess.answers.where(question_id: question.id).first
    if ans.blank?
      ans = @answer_sess.answers.new(question_id: question.id, option_id: params[:option])
    else
      ans.option_id = params[:option]
    end

    if ans.save
      render json: { saved: true }
    else
      render json: { error: true }
    end
  end

  def game
    render partial: "game"
  end

  def pika
    render json: {content: render_to_string(partial: "pika")}
  end

  private
    def rand_str
      (0...8).map { (65 + rand(26)).chr }.join
    end

    def set_quest
      @answer_sess = AnswerSession.where(key: session[:key]).first
    end
end
