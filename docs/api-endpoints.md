# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Tracks

- `GET /api/tracks`
- `POST /api/tracks`
- `GET /api/tracks/:id`
- `PATCH /api/tracks/:id`

### Annotations

- A tracks's annotations will be included in the track show template
- `GET /api/tracks/:id/annotation/:id`
- `POST /api/tracks/:id/annotations`
- `PATCH /api/tracks/:id/annotation/:id`
- `DELETE /api/tracks/:id/annotation/:id`

### Comments

- A track's comments will be included in the track show template. An annotation's comments will be included in the annotation show template.
- `GET /api/tracks/:id/comments
- `GET /api/tracks/:id/annotation/:id/comments
- `POST /api/tracks/:id/comments`
- `POST /api/tracks/:id/annotation/:id/comments`
- `DELETE /api/tracks/:id/comment/:id`
- `DELETE /api/tracks/:id/annotation/:id/comment/:id`
