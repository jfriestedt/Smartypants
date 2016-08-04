json.array! @tracks do |track|
  json.partial! 'track', track: track
end
