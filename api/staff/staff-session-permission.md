# Staff session permission [/api/1.0/club/{club_id}/staff/{staff_id}/session/{session_id}/permission]

Staff session permission API

### Staff session permission create [POST]

+ Parameters
    + club_id (required, int) ... Selected club id
    + staff_id (required, int) ... Selected staff id
    + session_id (required, int) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "permissions":[
                                "5",
                                "6",
                                "7"
                            ]
            }
            
+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/staff/1/session/1/permission",
                "staff": "http://localhost:8000/api/1.0/club/1/staff/1",
                "session": "http://localhost:8000/api/1.0/club/1/session/1",
                "permissions": [
                    5,
                    6,
                    7
                ]
            }

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

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Staff session permission detail [GET]

+ Parameters
    + club_id (required, int) ... Selected club id
    + staff_id (required, int) ... Selected staff id
    + session_id (required, int) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/staff/1/session/1/permission",
                "staff": "http://localhost:8000/api/1.0/club/1/staff/1",
                "session": "http://localhost:8000/api/1.0/club/1/session/1",
                "permissions": [
                    5,
                    6,
                    7
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

### Staff session permission update [PATCH]

+ Parameters
    + club_id (required, int) ... Selected club id
    + staff_id (required, int) ... Selected staff id
    + session_id (required, int) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "permissions":[
                                "2",
                                "3"
                            ]
            }

+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/staff/1/session/1/permission",
                "staff": "http://localhost:8000/api/1.0/club/1/staff/1",
                "session": "http://localhost:8000/api/1.0/club/1/session/1",
                "permissions": [
                    2,
                    3
                ]
            }

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

### Staff session permission delete [DELETE]

+ Parameters
    + club_id (required, int) ... Selected club id
    + staff_id (required, int) ... Selected staff id
    + session_id (required, int) ... Selected session id

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
