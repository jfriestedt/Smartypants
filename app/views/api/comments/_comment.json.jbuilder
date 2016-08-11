time_ago = time_ago_in_words(comment.created_at)

# track_id = commentable_type == "Annotation" ? comment.commentable.track.id : comment.commentable_id

json.author comment.author
json.time_ago time_ago
json.body comment.body
json.commentable_id comment.commentable_id
json.commentable_type comment.commentable_type
