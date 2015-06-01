# Club [/api/1.0/club/]

The club API

### Club create [POST]

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "name": "MyClub"
            }
            
+ Response 200 (application/json)

            {
                "id": 3,
                "name": "MyClub",
                "logo": "",
                "removed": false
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### Club list [GET]

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
                        "name": "TheOne",
                        "logo": "sdfsd",
                        "removed": false
                    },
                    {
                        "id": 2,
                        "name": "SDFsa",
                        "logo": "sdfds",
                        "removed": false
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }
            
### Club detail [GET /api/1.0/club/{club_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "name": "TheOne",
                "logo": "none",
                "removed": false
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Club update [PATCH /api/1.0/club/{club_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "name": "Verdant",
                "logo": "still none",
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "name": "Verdant",
                "logo": "still none",
                "removed": false
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### Club delete [DELETE /api/1.0/club/{club_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)
