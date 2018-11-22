class Answer
  include Mongoid::Document

  embedded_in :answer_session

  belongs_to :question

  field :option_id, type: String
  field :correct, type: Boolean

  validates_uniqueness_of :question_id

  before_save :check_answer
  after_save :mark_score

  def check_answer
    self.correct = self.question.options.find(option_id).correct
  end

  def mark_score
    self.answer_session.update_scores
  end
end
