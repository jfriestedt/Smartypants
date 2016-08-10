class Api::AnnotationsController < ApplicationController
  def show
    @annotation = Annotation.find(params[:id])
  end

  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.author = current_user
    @annotation.track_id = params[:track_id]

    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  private

  def annotation_params
    params.require(:annotation).permit(:body, :referent_start_index, :referent_end_index)
  end
end
