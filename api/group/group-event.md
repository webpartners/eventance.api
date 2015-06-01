# Group event [/api/1.0/club/{club_id}/group/{group_id}/event/{event_id}]

The Group event API

### Group event create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + group_id (required, int, `1`) ... Selected group id
    + event_id (required, int, `1`) ... Selected event id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "free_text": true,
                "position": 1,
                "conditions": 1,
                "flyer": 1,
                "responsible": 1,
                "permissions": [
                    "CREATE_FLYERS",
                    "CONSUME_FLYERS",
                    "CREATE_DRINKS",
                    "CONSUME_DRINKS"
                ]
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "group": 1,
                "event": 1,
                "responsible": 1,
                "free_text": true,
                "position": null,
                "conditions": null,
                "flyer": null,
                "permissions": [
                    "CREATE_FLYERS",
                    "CONSUME_FLYERS",
                    "CREATE_DRINKS",
                    "CONSUME_DRINKS"
                ]
            }

+ Response 400 (application/json)

            {
                "non_field_errors": [
                    "Los campos group, event deben formar un conjunto único."
                ]
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Group event detail [GET]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + group_id (required, int, `1`) ... Selected group id
    + event_id (required, int, `1`) ... Selected event id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "group": 1,
                "event": 1,
                "responsible": 1,
                "free_text": false,
                "position": 1,
                "conditions": 1,
                "flyer": null,
                "permissions": [
                    "CREATE_FLYERS",
                    "CONSUME_FLYERS",
                    "CREATE_DRINKS",
                    "CONSUME_DRINKS"
                ]
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

### Group event update [PATCH]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + group_id (required, int, `1`) ... Selected group id
    + event_id (required, int, `1`) ... Selected event id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "free_text": false,
                "position": 1,
                "conditions": 1,
                "flyer": 1,
                "responsible": 1
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "group": 1,
                "event": 1,
                "responsible": 1,
                "free_text": false,
                "position": 1,
                "conditions": 1,
                "flyer": null,
                "permissions": [
                    "CREATE_FLYERS",
                    "CONSUME_FLYERS",
                    "CREATE_DRINKS",
                    "CONSUME_DRINKS"
                ]
            }

+ Response 400 (application/json)

            {
                "status": 400,
                "exception": "You must be a member of the club assigned",
                "traceback": "None\n"
            }
            
+ Response 400 (application/json)

            {
                "flyer": [
                    "Clave primaria \"1\" inválida - objeto no existe."
                ]
            }

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }

### Group event delete [DELETE]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + group_id (required, int, `1`) ... Selected group id
    + event_id (required, int, `1`) ... Selected event id

+ Request
    + Headers

            Authorization: JWT [token]
    
+ Response 204 (application/json)

+ Response 400 (application/json)

            {
                "status": 400,
                "exception": "You must be a member of the club assigned",
                "traceback": "None\n"
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
