class Api::VotesController < ApplicationController
  def create
    vote = Vote.find_by(voter_id: vote_params[:voter_id], annotation_id: vote_params[:annotation_id])
    if vote && vote.value != vote_params[:value].to_i
      @vote = vote
      @vote.update!(vote_params)
      render :show
    elsif vote && vote.value == vote_params[:value].to_i
      render json: ["You can only vote once per annotation."], status: 422
    else
      @vote = Vote.new(vote_params)
      if @vote.save!
        @votes = @vote.annotation.votes
        render :index
      else
        render json: @vote.errors.full_messages, status: 422
      end
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:value, :annotation_id, :voter_id)
  end
end
