class AnswerSession
  include Mongoid::Document

  embeds_many :answers
  
  field :key, type: String
  field :score, type: Integer, default: 0

  def update_scores
    self.score = self.answers.where(correct: true).count
    self.save
  end
end
