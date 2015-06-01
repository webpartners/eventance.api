# Flyer event [/api/1.0/club/{club_id}/event/{event_id}/flyer/]

The flyer event API

### Flyer event create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + event_id (required, int, `1`) ... Selected event id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "uses": 100,
                "creator": 1,
                "owner": 1,
                "conditions_gen": [1,2,],
                "event": 2
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "uses": 100,
                "creator": 1,
                "owner": 1,
                "conditions_gen": [1,2,],
                "event": 2
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Flyer event detail [GET /api/1.0/club/{club_id}/event/{event_id}/flyer/{flyer_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + event_id (required, int, `1`) ... Selected event id
    + flyer_id (required, int, `1`) ... Selected flyer id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "uses": 100,
                "creator": 1,
                "owner": 1,
                "conditions_gen": [1,2,],
                "event": 2
            }

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }

+ Response 404 (application/json)

            {
                "detail": "No encontrado."
            }

### Flyer event update [PATCH /api/1.0/club/{club_id}/event/{event_id}/flyer/{flyer_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + event_id (required, int, `1`) ... Selected event id
    + flyer_id (required, int, `1`) ... Selected flyer id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "uses": 100,
                "creator": 1,
                "owner": 1,
                "conditions_gen": [1,2,],
                "event": 2
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "uses": 100,
                "creator": 1,
                "owner": 1,
                "conditions_gen": [1,2,],
                "event": 2
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Flyer event delete [DELETE /api/1.0/club/{club_id}/event/{event_id}/flyer/{flyer_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + event_id (required, int, `1`) ... Selected event id
    + flyer_id (required, int, `1`) ... Selected flyer id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)
