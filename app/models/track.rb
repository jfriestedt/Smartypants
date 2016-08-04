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
  validates :title, :artist, :lyrics, presence: true;
end
