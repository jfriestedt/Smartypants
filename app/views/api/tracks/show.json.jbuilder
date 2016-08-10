json.partial! 'api/tracks/track', track: @track
json.annotations @track.annotations do |annotation|
  json.partial! 'api/annotations/annotation', annotation: annotation
end
