# Staff [/api/1.0/club/{club_id}/staff/]

The staff API

### Staff create [POST]

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "club": 1,
                "user": 1,
                "group": 1,
                "permissions": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ]
            }
            
+ Response 200 (application/json)

            {
                "id": 3,
                "club": "http://localhost:8000/api/1.0/club/1",
                "user": 1,
                "group": 3,
                "permissions": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ]
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Staff list [GET]

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
            "count": 3,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "club": "http://localhost:8000/api/1.0/club/1",
                    "user": 1,
                    "group": 1,
                    "permissions": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10
                    ]
                }
            ]
        }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }
            
### Staff detail [GET /api/1.0/club/{club_id}/staff/{staff_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + staff_id (required, int, `1`) ... Selected staff id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "club": "http://localhost:8000/api/1.0/club/1",
                "user": 1,
                "group": 1,
                "permissions": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ]
            }

+ Response 401 (text/html)

            You are not allowed to access the content

### Staff update [PATCH /api/1.0/club/{club_id}/staff/{staff_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + staff_id (required, int, `1`) ... Selected staff id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "group": 2,
                "permissions": [
                    4,
                    5
                ]
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "club": "http://localhost:8000/api/1.0/club/1",
                "user": 1,
                "group": 2,
                "permissions": [
                    4,
                    5
                ]
            }

+ Response 401 (text/html)

            You are not allowed to access the content

### Staff events [GET /api/1.0/club/{club_id}/staff/{staff_id}/event/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + staff_id (required, int, `1`) ... Selected staff id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "count": 2,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "id": 1,
                        "start_time": "2015-05-11T14:15:35.000000Z",
                        "end_time": "2015-05-11T14:15:36.000000Z",
                        "club": "http://localhost:8000/api/1.0/club/1",
                        "name": "Event 001",
                        "monday": true,
                        "tuesday": true,
                        "wednesday": false,
                        "thursday": false,
                        "friday": false,
                        "saturday": false,
                        "sunday": false,
                        "status": "1",
                        "image": "none",
                        "type": "1"
                    },
                    {
                        "id": 2,
                        "start_time": "2012-09-04T06:00:00.000000Z",
                        "end_time": "2012-09-04T18:00:00.000000Z",
                        "club": "http://localhost:8000/api/1.0/club/1",
                        "name": "EVENT 002",
                        "monday": false,
                        "tuesday": false,
                        "wednesday": false,
                        "thursday": false,
                        "friday": false,
                        "saturday": false,
                        "sunday": false,
                        "status": "1",
                        "image": "none",
                        "type": "2"
                    }
                ]
            }

+ Response 401 (text/html)

            You are not allowed to access the content

+ Response 404 (text/html)

            StaffEvent matching query does not exist.

### Staff sessions [GET /api/1.0/club/{club_id}/staff/{staff_id}/session/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + staff_id (required, int, `1`) ... Selected staff id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                TODO - NOT IMPLEMENTED YET
            }

+ Response 401 (text/html)

            You are not allowed to access the content

+ Response 404 (text/html)

            StaffSession matching query does not exist.

### Staff stats [GET /api/1.0/club/{club_id}/staff/{staff_id}/stats/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + staff_id (required, int, `1`) ... Selected staff id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            TODO - NEEDS DEFINITION

+ Response 401 (text/html)

            You are not allowed to access the content

+ Response 404 (text/html)

            StaffSession matching query does not exist.
