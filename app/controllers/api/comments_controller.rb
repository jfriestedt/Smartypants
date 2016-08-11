class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save!
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update!(body: params[:comment][:body]);
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
    # TODO: Render what here?
    render
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :commentable_type, :commentable_id)
  end
end
