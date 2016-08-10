json.partial! 'api/tracks/track', track: @track
# NB: Sorting annotations by start index for later use in track show component!
json.annotations @track.annotations.sort_by { |annotation| annotation.referent_start_index } do |annotation|
  json.partial! 'api/annotations/annotation', annotation: annotation
end
