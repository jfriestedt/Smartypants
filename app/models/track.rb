# == Schema Information
#
# Table name: tracks
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  artist             :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  lyrics             :text             not null
#  submitter_id       :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  album              :string
#

class Track < ActiveRecord::Base
  validates :title, :artist, :lyrics, presence: true

  # TODO: Default image not working???
  has_attached_file :image, default_url: "Default.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to(
    :submitter,
    class_name: "User",
    foreign_key: :submitter_id,
    primary_key: :id
  )

  has_many :annotations,
    class_name: "Annotation",
    foreign_key: :track_id,
    primary_key: :id
end
