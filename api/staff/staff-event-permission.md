# Staff event permission [/api/1.0/club/{club_id}/staff/{staff_id}/event/{event_id}/permission]

Staff event permission API

### Staff event permission create [POST]

+ Parameters
    + club_id (required, int) ... Selected club id
    + staff_id (required, int) ... Selected staff id
    + event_id (required, int) ... Selected event id

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
                "id": "1",
                "staff": "http://localhost:8000/api/1.0/club/1/staff/1",
                "event": "http://localhost:8000/api/1.0/club/1/event/1",
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

### Staff event permission detail [GET]

+ Parameters
    + club_id (required, int) ... Selected club id
    + staff_id (required, int) ... Selected staff id
    + event_id (required, int) ... Selected event id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": "1",
                "staff": "http://localhost:8000/api/1.0/club/1/staff/1",
                "event": "http://localhost:8000/api/1.0/club/1/event/1",
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

### Staff event permission update [PATCH]

+ Parameters
    + club_id (required, int) ... Selected club id
    + staff_id (required, int) ... Selected staff id
    + event_id (required, int) ... Selected event id

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
                "id": "1",
                "staff": "http://localhost:8000/api/1.0/club/1/staff/1",
                "event": "http://localhost:8000/api/1.0/club/1/event/1",
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

### Staff event permission delete [DELETE]

+ Parameters
    + club_id (required, int) ... Selected club id
    + staff_id (required, int) ... Selected staff id
    + event_id (required, int) ... Selected event id

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
