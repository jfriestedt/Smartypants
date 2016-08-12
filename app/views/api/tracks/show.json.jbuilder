json.partial! 'api/tracks/track', track: @track
# NB: Sorting annotations by start index for later use in track show component!

# NB: Add a newAnnotation key to the jBuilder obj if we just made an annotation.
if !!@annotation
  json.newAnnotation do
    json.partial! 'annotation', annotation: @annotation
  end
end
