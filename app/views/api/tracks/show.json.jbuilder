json.partial! 'api/tracks/track', track: @track
# NB: Sorting annotations by start index for later use in track show component!
if !!@annotation
  json.newAnnotation do
    json.partial! 'annotation', annotation: @annotation
  end
end
