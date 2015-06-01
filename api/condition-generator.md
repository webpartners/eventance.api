# Condition generator [/api/1.0/club/{club_id}/condition-generator/]

The condition generator API

### ConditionGenerator create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "drinks": 20,
                "price": 8,
                "guest": 100,
                "start_hour": "06:00Z",
                "duration": "6",
                "description": "hailooooo",
                "zones": [1]
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

### ConditionGenerator detail [GET /api/1.0/club/{club_id}/condition-generator/{condition_generator_id}]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + condition_generator_id (required, int, `1`) ... Selected condition generator id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
              "id": 1,
              "drinks": "45",
              "price": "56",
              "guest": 6789,
              "start_hour": "14:05:42",
              "duration": "00:00:05",
              "description": "kh",
              "club": 1,
              "zones": [
                1,
                2,
                3
              ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### ConditionGenerator update [PATCH /api/1.0/club/{club_id}/condition-generator/{condition_generator_id}]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + condition_generator_id (required, int, `1`) ... Selected condition generator id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
              "drinks": "45",
              "price": "56",
              "guest": 6789,
              "start_hour": "14:05:42",
              "duration": "00:00:05",
              "description": "kh",
              "club": 1,
              "zones": [
                1,
                2,
                3
              ]
            }

+ Response 200 (application/json)

            {
              "id": 1,
              "drinks": "45",
              "price": "56",
              "guest": 6789,
              "start_hour": "14:05:42",
              "duration": "00:00:05",
              "description": "kh",
              "club": 1,
              "zones": [
                1,
                2,
                3
              ]
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### ConditionGenerator delete [DELETE /api/1.0/club/{club_id}/condition-generator/{condition_generator_id}]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + condition_generator_id (required, int, `1`) ... Selected condition generator id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)

