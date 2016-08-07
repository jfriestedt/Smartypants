class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find(params[:id])
  end

  def create
    @track = Track.new(track_params)
    @track.submitter = current_user

    if @track.save
      # render "api/tracks/show" + @track.id
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end
end

private

def track_params
  params.require(:track).permit(:title, :artist, :lyrics, :album)
end
