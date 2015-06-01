# Lists [/api/1.0/club/{club_id}/list/]

The list API

### List club [GET]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id

+ Request
    + Headers

            Authorization: JWT [token]
    
+ Response 200 (application/json)

            {
                "id": 1,
                "club": "http://localhost:8000/api/1.0/club/1",
                "creator": "http://localhost:8000/api/1.0/club/1/staff/1",
                "owner": "http://localhost:8000/api/1.0/club/1/staff/1"
            }

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }

### List club detail [GET /api/1.0/club/{club_id}/list/{list_id}]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id

+ Request
    + Headers

            Authorization: JWT [token]
    
+ Response 200 (application/json)

            {
                "id": 1,
                "club": "http://localhost:8000/api/1.0/club/1",
                "creator": "http://localhost:8000/api/1.0/club/1/staff/1",
                "owner": "http://localhost:8000/api/1.0/club/1/staff/1"
            }

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }

### List club create [POST]

+ Parameters
    + club_id (required, int, `1`, `1`) ... Selected club id

+ Request
    + Headers

            Authorization: JWT [token]

    + Body

            {
                "owner":"1",
                "creator":"1"
            }
    
+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/list/1/",
                "club": "http://localhost:8000/api/1.0/club/1",
                "creator": "http://localhost:8000/api/1.0/club/1/staff/1",
                "owner": "http://localhost:8000/api/1.0/club/1/staff/1"
            }

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }

### List club delete [DELETE /api/1.0/club/{club_id}/list/{list_id}]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id

+ Request
    + Headers

            Authorization: JWT [token]
    
+ Response 204 (application/json)

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }
