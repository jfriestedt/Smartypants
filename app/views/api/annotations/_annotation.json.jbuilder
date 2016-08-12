json.id annotation.id
json.body annotation.body
json.referent_start_index annotation.referent_start_index
json.referent_end_index annotation.referent_end_index
json.author annotation.author
json.track annotation.track


json.comments annotation.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
json.votes annotation.votes do |vote|
  json.partial! 'api/votes/vote', vote: vote
end

  def score(annotation)
    score = 0
    annotation.votes.each do |vote|
      score += vote.value
    end
    return score
  end

if score(annotation) >= 0
  score_string = "+" + score(annotation).to_s
  score_color = "green"
else
  score_string = score(annotation).to_s
  score_color = "red"
end

json.score score_string
json.score_color score_color
