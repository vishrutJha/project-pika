class Question
  include Mongoid::Document

  embeds_many :options
  accepts_nested_attributes_for :options, allow_destroy: true

  field :questn, type: String
end
