# == Schema Information
#
# Table name: annotations
#
#  id                   :integer          not null, primary key
#  author_id            :integer          not null
#  track_id             :integer          not null
#  body                 :text             not null
#  referent_start_index :integer          not null
#  referent_end_index   :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  score                :integer          default(0), not null
#

class Annotation < ActiveRecord::Base
  validates(
    :author_id,
    :track_id,
    :body,
    :referent_start_index,
    :referent_end_index,
    presence: true
  )

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  belongs_to(
    :track,
    class_name: "Track",
    foreign_key: :track_id,
    primary_key: :id
  )

  has_many :votes,
    class_name: "Vote",
    primary_key: :id,
    foreign_key: :annotation_id

  has_many :comments, as: :commentable

  def tally_score
    votes.pluck(:value).inject(&:+) || 0
  end

end
