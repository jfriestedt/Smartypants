# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  author_id        :integer          not null
#  commentable_type :string           not null
#  body             :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  commentable_id   :integer          not null
#

class Comment < ActiveRecord::Base
  validates :author_id, :commentable_type, :commentable_id, :body, presence: true

  belongs_to :commentable, polymorphic: true
end
