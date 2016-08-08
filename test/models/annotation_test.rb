# == Schema Information
#
# Table name: annotations
#
#  id                   :integer          not null, primary key
#  author_id            :integer          not null
#  track_id             :integer          not null
#  body                 :text             not null
#  referent_start_index :integer          not null
#  refernt_end_index    :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

require 'test_helper'

class AnnotationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
