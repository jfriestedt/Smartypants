class Api::VotesController < ApplicationController
  def create
    vote = Vote.find_by(voter_id: vote_params[:voter_id], annotation_id: vote_params[:annotation_id])
    if vote && vote.value != vote_params[:value].to_i
      vote.update!(vote_params)
      vote.annotation.score = tally_score(vote.annotation)
      @vote = vote
      render :show
    elsif vote && vote.value == vote_params[:value].to_i
      render json: ["You can only vote once per annotation."], status: 422
    else
      vote = Vote.new(vote_params)
      if vote.save!
        @vote = vote
        render :show
      else
        render json: vote.errors.full_messages, status: 422
      end
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:value, :annotation_id, :voter_id)
  end

  def tally_score(annotation)
    score = 0
    annotation.votes.each do |vote|
      score += vote.value
    end
    return score
  end

end
