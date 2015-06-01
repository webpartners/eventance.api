# Group [/api/1.0/club/{club_id}/staff-group/]

The group API

### Group create [POST]

+ Parameters
    + club_id (required, int) ... staff's club

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "name": "The group name"
            }

+ Response 200 (application/json)
    
            {
                "id": 1,
                "club": "http://localhost:8000/api/1.0/club/1",
                "name": "The group name"
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }
            
+ Response 409 (text/html)
            
            CONFLICT: duplicated object

### Group list [GET]

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
                        "club": "http://localhost:8000/api/1.0/club/1",
                        "name": "Camareros"
                    },
                    {
                        "id": 2,
                        "club": "http://localhost:8000/api/1.0/club/1",
                        "name": "Seguridad"
                    }
                ]
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }
