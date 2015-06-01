# Zone [/api/1.0/club/{club_id}/zone/]

The zone API

### Zone create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "name": "Zone 01"
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "club": "http://localhost:8000/api/1.0/club/1",
                "name": "Zone 01"
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Zone list [GET]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id

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
                        "club": "http://localhost:8000/api/1.0/club/1",
                        "name": "Zone 01"
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Zone update [PATCH /api/1.0/club/{club_id}/zone/{zone_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + zone_id (required, int, `1`) ... Selected zone id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "name": "Zone 02"
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "club": "http://localhost:8000/api/1.0/club/1",
                "name": "Zona 02"
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Zone delete [DELETE /api/1.0/club/{club_id}/zone/{zone_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + zone_id (required, int, `1`) ... Selected zone id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)
