class Api::AnnotationsController < ApplicationController
  def show
    @annotation = Annotation.find(params[:id])
  end

  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.author = current_user
    @annotation.track_id = params[:track_id]

    if @annotation.save!
      @track = @annotation.track
      render 'api/tracks/show'
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def update
    @annotation = Annotation.find(params[:id])
    if @annotation.update!(body: params[:annotation][:body]);
      @track = @annotation.track
      render 'api/tracks/show'
    else
      render json: @annotation.errors.full_message, status: 422
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    @track = @annotation.track
    @annotation.destroy!
    render 'api/tracks/show'
  end

  private

  def annotation_params
    params.require(:annotation).permit(:body, :referent_start_index, :referent_end_index)
  end
end
