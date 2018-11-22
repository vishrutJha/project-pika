class Option
  include Mongoid::Document

  embedded_in :question

  field :answer, type: String
  field :correct, type: Boolean
end
