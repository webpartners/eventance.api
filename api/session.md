# Session [/api/1.0/club/{club_id}/session]

The Session API

### Session create [POST]

+ Parameters
    + club_id (required, int) ... Selected club id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
              "name": "Session 1",
              "event": "1",
              "start_date": "2015-05-13T15:00Z",
              "end_date": "2015-05-13T18:00Z"
            }
            
+ Response 200 (application/json)

           {
              "id": 8,
              "start_date": "2015-05-13T15:00:00.000000Z",
              "end_date": "2015-05-13T18:00:00.000000Z",
              "event": "http://localhost:8000/api/1.0/club/1/event",
              "name": "Session1"
            }

+ Response 400 (application/json)

            {
              "non_field_errors": [
                "Los campos name, event, start_date, end_date deben formar un conjunto único."
              ]
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Session list [GET]

+ Parameters
    + club_id (required, int) ... Selected club id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/session/1",
                "start_date": "2015-05-18T10:17:18.000000Z",
                "end_date": "2015-05-18T11:27:20.000000Z",
                "event": "http://localhost:8000/api/1.0/club/1/event/1",
                "name": "Session1"
            }

+ Response 400 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }

### Session detail [GET /api/1.0/club/{club_id}/session/{session_id}]

+ Parameters
    + club_id (required, int) ... Selected club id
    + session_id (int) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/session/1",
                "start_date": "2015-05-18T10:17:18.000000Z",
                "end_date": "2015-05-18T11:27:20.000000Z",
                "event": "http://localhost:8000/api/1.0/club/1/event/1",
                "name": "Session1"
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

### Session update [PATCH /api/1.0/club/{club_id}/session/{session_id}]

+ Parameters
    + club_id (required, int) ... Selected club id
    + session_id (int) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "name": "Session 001"
            }

+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/session/1",
                "start_date": "2015-05-18T10:17:18.000000Z",
                "end_date": "2015-05-18T11:27:20.000000Z",
                "event": "http://localhost:8000/api/1.0/club/1/event/1",
                "name": "Session 001"
            }

+ Response 400 (application/json)

            {
                "status": 400,
                "exception": "You must be a member of the club assigned",
                "traceback": "None\n"
            }
            
+ Response 400 (application/json)

            {
                "name": [
                    "Este campo no puede ser nulo."
                ]
            }

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }
