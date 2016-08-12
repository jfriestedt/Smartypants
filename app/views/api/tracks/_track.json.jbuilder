json.id track.id
json.title track.title
json.artist track.artist
json.album track.album
json.lyrics track.lyrics
json.image_url asset_path(track.image.url)
json.submitter track.submitter
json.comments track.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
json.annotations track.annotations.sort_by { |annotation| annotation.referent_start_index } do |annotation|
  json.partial! 'api/annotations/annotation', annotation: annotation
end
