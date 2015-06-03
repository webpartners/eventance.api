# Free text [/api/1.0/club/{club_id}/session/{session_id}/free_text/]

The Free text API

### Free text create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "removed": false,
                "creation_date": "2015-06-03T14:55:14Z",
                "expiry": "2015-06-03T16:55:15Z",
                "used": false,
                "used_time": "2015-06-03T12:55:16Z",
                "owner": 1,
                "used_user": 1
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "removed": false,
                "creation_date": "2015-06-03T14:55:14Z",
                "expiry": "2015-06-03T16:55:15Z",
                "used": false,
                "used_time": "2015-06-03T12:55:16Z",
                "owner": 1,
                "club": 1,
                "session": 1,
                "used_user": 1
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Free text list [GET]

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
                        "creation_date": "2015-06-03T14:55:14Z",
                        "expiry": "2015-06-03T16:55:15Z",
                        "used": false,
                        "used_time": "2015-06-03T12:55:16Z",
                        "owner": 1,
                        "club": 1,
                        "session": 1,
                        "used_user": 1
                    },
                    {
                        "id": 2,
                        "removed": false,
                        "creation_date": "2015-06-03T14:55:14Z",
                        "expiry": "2015-06-03T16:55:15Z",
                        "used": false,
                        "used_time": "2015-06-03T12:55:16Z",
                        "owner": 2,
                        "club": 1,
                        "session": 1,
                        "used_user": 1
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Free text staff create [POST /api/1.0/club/{club_id}/session/{session_id}/staff/{staff_id}/free_text/{free_text_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + staff_id (required, int, `1`) ... Selected staff id
    + free_text_id (required, int, `1`) ... Selected free_text id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "removed": false,
                "creation_date": "2015-06-03T14:55:14Z",
                "expiry": "2015-06-03T16:55:15Z",
                "used": false,
                "used_time": "2015-06-03T12:55:16Z",
                "used_user": 1
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "removed": false,
                "creation_date": "2015-06-03T14:55:14Z",
                "expiry": "2015-06-03T16:55:15Z",
                "used": false,
                "used_time": "2015-06-03T12:55:16Z",
                "owner": 1,
                "club": 1,
                "session": 1,
                "used_user": 1
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Free text staff list [GET /api/1.0/club/{club_id}/session/{session_id}/staff/{staff_id}/free_text/{free_text_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + staff_id (required, int, `1`) ... Selected staff id
    + free_text_id (required, int, `1`) ... Selected free_text id

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
                        "creation_date": "2015-06-03T14:55:14Z",
                        "expiry": "2015-06-03T16:55:15Z",
                        "used": false,
                        "used_time": "2015-06-03T12:55:16Z",
                        "owner": 1,
                        "club": 1,
                        "session": 1,
                        "used_user": 1
                    },
                    {
                        "id": 2,
                        "removed": false,
                        "creation_date": "2015-06-03T14:55:14Z",
                        "expiry": "2015-06-03T16:55:15Z",
                        "used": false,
                        "used_time": "2015-06-03T12:55:16Z",
                        "owner": 2,
                        "club": 1,
                        "session": 1,
                        "used_user": 1
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Free text detail [GET /api/1.0/club/{club_id}/session/{session_id}/free_text/{free_text_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + free_text_id (required, int, `1`) ... Selected free_text id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "removed": false,
                "creation_date": "2015-06-03T14:55:14Z",
                "expiry": "2015-06-03T16:55:15Z",
                "used": false,
                "used_time": "2015-06-03T12:55:16Z",
                "owner": 1,
                "club": 1,
                "session": 1,
                "used_user": 1
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

### Free text update [PATCH /api/1.0/club/{club_id}/session/{session_id}/free_text/{free_text_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + free_text_id (required, int, `1`) ... Selected free_text id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "removed": false,
                "creation_date": "2015-06-03T14:55:14Z",
                "expiry": "2015-06-03T16:55:15Z",
                "used": false,
                "used_time": "2015-06-03T12:55:16Z",
                "used_user": 1
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "removed": false,
                "creation_date": "2015-06-03T14:55:14Z",
                "expiry": "2015-06-03T16:55:15Z",
                "used": false,
                "used_time": "2015-06-03T12:55:16Z",
                "owner": 1,
                "club": 1,
                "session": 1,
                "used_user": 1
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Free text delete [DELETE /api/1.0/club/{club_id}/session/{session_id}/free_text/{free_text_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + session_id (required, int, `1`) ... Selected session id
    + free_text_id (required, int, `1`) ... Selected free_text id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)
