# Staff Session [/api/1.0/club/{club_id}/staff/{staff_id}/session/{session_id}]

The staff sesssion API

### Staff Session Detail [GET]

+ Request
    + Headers

            Authorization: JWT [token]

+ Parameters
    + club_id (required, int) ... Selected club id
    + staff_id (required, int) ... Selected staff id
    + session_id (required, int) ... Selected session id
    
            
+ Response 200 (application/json)

            {
                "id": 11,
                "session": "http://localhost:8000/api/1.0/club/1/session/1",
                "responsible": "http://localhost:8000/api/1.0/club/1/staff/1",
                "staff": "http://localhost:8000/api/1.0/club/1/staff/1",
                "free_text": false,
                "generator": "S-S",
                "conditions": null,
                "flyer": null,
                "position": null
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            "detail" - "Las credenciales de autenticación no se proveyeron."

### Staff Session Create [POST]

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "responsible": "1",
                "free_text": "False",
                "conditions" : 1
            }
            
+ Response 201 (application/json)

            {
                "id": 12,
                "session": "http://localhost:8000/api/1.0/club/1/session/1",
                "responsible": "http://localhost:8000/api/1.0/club/1/staff/1",
                "staff": "http://localhost:8000/api/1.0/club/1/staff/1",
                "free_text": false,
                "generator": "S-S",
                "conditions": 1,
                "flyer": null,
                "position": null
            }
+ Response 409 (application/json)

            {
                "409-Conflict": "Staff-session already exists"
            }
+ Response 409 (text/html)

            CONFLICT: duplicated object


+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            "detail" - "Las credenciales de autenticación no se proveyeron."

### Staff Session Update [PATCH]

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "responsible": "1",
                "free_text": "True",
                "conditions" : 1
            }
            
+ Response 200 (application/json)

            {
                "id": 12,
                "session": "http://localhost:8000/api/1.0/club/1/session/1",
                "responsible": "http://localhost:8000/api/1.0/club/1/staff/1",
                "staff": "http://localhost:8000/api/1.0/club/1/staff/1",
                "free_text": true,
                "generator": "S-S",
                "conditions": 1,
                "flyer": null,
                "position": null
            }

+ Response 404 (application/json)

            {
                "detail: "No encontrado"
            }

+ Response 404 (text/html)

            "No encontrado"

+ Response 409 (text/html)

            CONFLICT: duplicated object


+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Staff Session Delete [DELETE]

+ Request
    + Headers
    
            Authorization: JWT [token]

    
            
+ Response 204 (application/json)

            
+ Response 404 (application/json)

            {
                "detail: "No encontrado"
            }

+ Response 409 (text/html)

            CONFLICT: duplicated object


+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }
