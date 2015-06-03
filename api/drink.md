# Drink [/api/1.0/club/{club_id}/session/{session_id}/drink/]

The Drink API

### Drink create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "removed": false,
                "creation_date": "2015-06-03T14:59:18Z",
                "expiration_date": "2015-06-03T15:59:19Z",
                "expiry": "2015-06-03T16:59:23Z",
                "used": false,
                "used_time": "2015-06-03T15:59:24Z",
                "amount": 100,
                "owner": 1,
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "removed": false,
                "creation_date": "2015-06-03T14:59:18Z",
                "expiration_date": "2015-06-03T15:59:19Z",
                "expiry": "2015-06-03T16:59:23Z",
                "used": false,
                "used_time": "2015-06-03T15:59:24Z",
                "amount": 100,
                "club": 1,
                "owner": 1,
                "session": 1
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Drink list [GET]

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
                        "removed": false,
                        "creation_date": "2015-06-03T14:59:18Z",
                        "expiration_date": "2015-06-03T15:59:19Z",
                        "expiry": "2015-06-03T16:59:23Z",
                        "used": false,
                        "used_time": "2015-06-03T15:59:24Z",
                        "amount": 100,
                        "club": 1,
                        "owner": 1,
                        "session": 1
                    },
                    {
                        "id": 2,
                        "removed": false,
                        "creation_date": "2015-06-03T14:59:18Z",
                        "expiration_date": "2015-06-03T15:59:19Z",
                        "expiry": "2015-06-03T16:59:23Z",
                        "used": false,
                        "used_time": "2015-06-03T15:59:24Z",
                        "amount": 100,
                        "club": 1,
                        "owner": 2,
                        "session": 1
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Drink staff create [POST /api/1.0/club/{club_id}/session/{session_id}/staff/{staff_id}/drink/{drink_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + staff_id (required, int, `1`) ... Selected staff id
    + drink_id (required, int, `1`) ... Selected drink id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "removed": false,
                "creation_date": "2015-06-03T14:59:18Z",
                "expiration_date": "2015-06-03T15:59:19Z",
                "expiry": "2015-06-03T16:59:23Z",
                "used": false,
                "used_time": "2015-06-03T15:59:24Z",
                "amount": 100,
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "removed": false,
                "creation_date": "2015-06-03T14:59:18Z",
                "expiration_date": "2015-06-03T15:59:19Z",
                "expiry": "2015-06-03T16:59:23Z",
                "used": false,
                "used_time": "2015-06-03T15:59:24Z",
                "amount": 100,
                "club": 1,
                "owner": 1,
                "session": 1
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Drink staff list [GET /api/1.0/club/{club_id}/session/{session_id}/staff/{staff_id}/drink/{drink_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + staff_id (required, int, `1`) ... Selected staff id
    + drink_id (required, int, `1`) ... Selected drink id

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
                        "removed": false,
                        "creation_date": "2015-06-03T14:59:18Z",
                        "expiration_date": "2015-06-03T15:59:19Z",
                        "expiry": "2015-06-03T16:59:23Z",
                        "used": false,
                        "used_time": "2015-06-03T15:59:24Z",
                        "amount": 100,
                        "club": 1,
                        "owner": 1,
                        "session": 1
                    },
                    {
                        "id": 2,
                        "removed": false,
                        "creation_date": "2015-06-03T14:59:18Z",
                        "expiration_date": "2015-06-03T15:59:19Z",
                        "expiry": "2015-06-03T16:59:23Z",
                        "used": false,
                        "used_time": "2015-06-03T15:59:24Z",
                        "amount": 100,
                        "club": 1,
                        "owner": 2,
                        "session": 1
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Drink detail [GET /api/1.0/club/{club_id}/session/{session_id}/drink/{drink_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + drink_id (required, int, `1`) ... Selected drink id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "removed": false,
                "creation_date": "2015-06-03T14:59:18Z",
                "expiration_date": "2015-06-03T15:59:19Z",
                "expiry": "2015-06-03T16:59:23Z",
                "used": false,
                "used_time": "2015-06-03T15:59:24Z",
                "amount": 100,
                "club": 1,
                "owner": 1,
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

### Drink update [PATCH /api/1.0/club/{club_id}/session/{session_id}/drink/{drink_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + drink_id (required, int, `1`) ... Selected drink id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "removed": false,
                "creation_date": "2015-06-03T14:59:18Z",
                "expiration_date": "2015-06-03T15:59:19Z",
                "expiry": "2015-06-03T16:59:23Z",
                "used": false,
                "used_time": "2015-06-03T15:59:24Z",
                "amount": 100,
                "owner": 1,
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "removed": false,
                "creation_date": "2015-06-03T14:59:18Z",
                "expiration_date": "2015-06-03T15:59:19Z",
                "expiry": "2015-06-03T16:59:23Z",
                "used": false,
                "used_time": "2015-06-03T15:59:24Z",
                "amount": 100,
                "club": 1,
                "owner": 1,
                "session": 1
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Drink delete [DELETE /api/1.0/club/{club_id}/session/{session_id}/drink/{drink_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + drink_id (required, int, `1`) ... Selected drink id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)
