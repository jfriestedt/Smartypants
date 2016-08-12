# == Schema Information
#
# Table name: votes
#
#  id            :integer          not null, primary key
#  value         :integer          not null
#  voter_id      :integer          not null
#  annotation_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class VoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
