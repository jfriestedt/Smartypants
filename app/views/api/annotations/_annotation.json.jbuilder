if annotation.score >= 0
  score_string = "+" + annotation.score.to_s
  score_color = "green"
else
  score_string = "-" + annotation.score.to_s
  score_color = "red"
end

json.id annotation.id
json.body annotation.body
json.referent_start_index annotation.referent_start_index
json.referent_end_index annotation.referent_end_index
json.author annotation.author
json.track annotation.track
json.score score_string
json.score_color score_color
json.comments annotation.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
