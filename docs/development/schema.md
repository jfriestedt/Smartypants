# Schema Information

## tracks
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
title             | string    | not null
album             | integer   |
artist            | string    | not null
image_file_name   | string    |
image_content_type| string    |
image_file_size   | integer   |
image_updated_at  | datetime  |
lyrics            | text      | not null
submitter_id      | integer   | not null, foreign key (references users), indexed

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
track_id    | integer   | not null, foreign key (references tracks), indexed
body        | text      | not null
referent    | text      | not null
ref_st_idx  | integer   | not null
ref_end_idx | integer   | not null
score       | integer   | not null

## track_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
track_id    | integer   | not null, foreign key (references tracks), indexed
body        | text      | not null

## annotation_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
annotation_id integer   | not null, foreign key (references annotations), indexed
body        | text      | not null


## votes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
voter_id    | integer   | not null, foreign key (references users), indexed, unique in scope of annotation_id
annotation_id integer   | not null, foreign key (references annotations), indexed
type        | string    | not null, either "upvote" or "downvote"

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
