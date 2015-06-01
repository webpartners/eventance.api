# List RRPP [/api/1.0/club/{club_id}/list/{list_id}/rrpp/]

The list RRPP API

### List RRPP create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "staff": 1,
                "number_of_guests": 40
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "staff": 1,
                "number_of_guests": 40
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### List RRPP list [GET]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id

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
                        "staff": 1,
                        "number_of_guests": 40
                    },
                    {
                        "id": 2,
                        "staff": 1,
                        "number_of_guests": 20
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### List RRPP detail [GET /api/1.0/club/{club_id}/list/{list_id}/rrpp/{list_rrpp_id}]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + list_rrpp_id (required, int, `1`) ... Selected list rrpp id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "staff": 1,
                "number_of_guests": 40
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

### List RRPP update [PATCH /api/1.0/club/{club_id}/list/{list_id}/rrpp/{list_rrpp_id}]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + list_rrpp_id (required, int, `1`) ... Selected list rrpp id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "number_of_guests": 50
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "staff": 1,
                "number_of_guests": 50
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### List RRPP delete [DELETE /api/1.0/club/{club_id}/list/{list_id}/rrpp/{list_rrpp_id}]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + list_rrpp_id (required, int, `1`) ... Selected list rrpp id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)
