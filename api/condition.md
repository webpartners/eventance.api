# Condition [/api/1.0/club/{club_id}/condition/]

The condition API

### Condition create [POST]

+ Parameters
    + club_id (required, int) ... Selected club id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "drinks":"",
                "price":"",
                "guest":"100",
                "start_date":"2015-09-04 06:00Z",
                "end_date":"2015-09-04 06:00Z",
                "description":"",
                "zones":["1"]
            }
            
+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/condition/1/",
                "start_date": "2015-09-04T06:00:00.000000Z",
                "end_date": "2015-09-04T06:00:00.000000Z",
                "club": "http://localhost:8000/api/1.0/club/1",
                "drinks": "",
                "price": "",
                "guest": 100,
                "description": "",
                "zones": [
                    1
                ]
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Condition detail [GET /api/1.0/club/{club_id}/condition/{condition_id}]

+ Parameters
    + club_id (required, int) ... Selected club id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/condition/1/",
                "start_date": "2015-09-04T06:00:00.000000Z",
                "end_date": "2015-09-04T06:00:00.000000Z",
                "club": "http://localhost:8000/api/1.0/club/1",
                "drinks": "",
                "price": "",
                "guest": 100,
                "description": "",
                "zones": [
                    1
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Condition update [PATCH /api/1.0/club/{club_id}/condition/{condition_id}]

+ Parameters
    + club_id (required, int) ... Selected club id
    + condition_id (required, int) ... Selected condition id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "drinks":"",
                "price":"",
                "guest":"100",
                "start_date":"2015-09-04 06:00Z",
                "end_date":"2015-09-04 06:00Z",
                "description":"",
                "zones":["1"]
            }

+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/condition/1/",
                "start_date": "2015-09-04T06:00:00.000000Z",
                "end_date": "2015-09-04T06:00:00.000000Z",
                "club": "http://localhost:8000/api/1.0/club/1",
                "drinks": "20",
                "price": "8",
                "guest": 100,
                "description": "hailooooo",
                "zones": [
                    1
                ]
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Condtion delete [DELETE /api/1.0/club/{club_id}/condition/{condition_id}]

+ Parameters
    + club_id (required, int) ... Selected club id
    + condition_id (required, int) ... Selected condition id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)
			
