# Invitation [/api/1.0/club/{club_id}/session/{session_id}/invitation/]

The Invitation API

### Invitation create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "used": false,
                "amount": 0,
                "owner_id": 1,
                "conditions": 1,
                "session": 1
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "used": false,
                "amount": 0,
                "owner_id": 1,
                "conditions": 1,
                "session": 1
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Invitation list [GET]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "count": 1,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 1,
                        "used": false,
                        "amount": 0,
                        "owner_id": 1,
                        "conditions": 1,
                        "session": 1
                    },
                    {
                        "id": 2,
                        "used": false,
                        "amount": 0,
                        "owner_id": 1,
                        "conditions": 1,
                        "session": 1  
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Invitation staff create [POST /api/1.0/club/{club_id}/session/{session_id}/staff/{staff_id}/invitation/{invitation_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + staff_id (required, int, `1`) ... Selected staff id
    + invitation_id (required, int, `1`) ... Selected invitation id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "used": false,
                "amount": 0,
                "conditions": 1,
                "session": 1
            }
            
+ Response 200 (application/json)

            {
                "id": 3,
                "used": false,
                "amount": 0,
                "owner_id": 1,
                "conditions": 1,
                "session": 1
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Drink staff list [GET /api/1.0/club/{club_id}/session/{session_id}/staff/{staff_id}/invitation/{invitation_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + staff_id (required, int, `1`) ... Selected staff id
    + invitation_id (required, int, `1`) ... Selected invitation id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "count": 1,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 1,
                        "used": false,
                        "amount": 0,
                        "owner_id": 1,
                        "conditions": 1,
                        "session": 1
                    },
                    {
                        "id": 12
                        "used": false,
                        "amount": 0,
                        "owner_id": 1,
                        "conditions": 1,
                        "session": 1
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Invitation detail [GET /api/1.0/club/{club_id}/session/{session_id}/invitation/{invitation_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + invitation_id (required, int, `1`) ... Selected invitation id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "used": false,
                "amount": 0,
                "owner_id": 1,
                "conditions": 1,
                "session": 1
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

### Invitation update [PATCH /api/1.0/club/{club_id}/session/{session_id}/invitation/{invitation_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + invitation_id (required, int, `1`) ... Selected invitation id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "used": false,
                "amount": 0,
                "owner_id": 1,
                "conditions": 1,
                "session": 1
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "used": false,
                "amount": 0,
                "owner_id": 1,
                "conditions": 1,
                "session": 1
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Invitation delete [DELETE /api/1.0/club/{club_id}/session/{session_id}/invitation/{invitation_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + invitation_id (required, int, `1`) ... Selected invitation id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)
