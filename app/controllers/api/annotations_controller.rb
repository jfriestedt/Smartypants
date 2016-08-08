class Api::AnnotationsController < ApplicationController
  def show
    @annotation = Annotation.find(params[:id])
  end

  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.author = current_user
    @annotation.track = Track.find(params[:id])

    if @annotation.save
      # TODO: what goes here?
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end
end
