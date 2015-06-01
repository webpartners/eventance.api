# List session rrpp [/api/1.0/club/{club_id}/list/{list_id}/session/{session_id}/rrpp/]

The list session rrpp API

### List session rrpp create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + session_id (required, int, `1`) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "staff": 1,
                "number_of_guests": 4,
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "staff": 2,
                "number_of_guests": 4,
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### List session rrpp list [GET]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
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
                        "staff": 1,
                        "number_of_guests": 4,
                    },
                    {
                        "id": 2,
                        "staff": 3,
                        "number_of_guests": 40,
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### List session rrpp detail [GET /api/1.0/club/{club_id}/list/{list_id}/session/{session_id}/rrpp/{rrpp_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + session_id (required, int, `1`) ... Selected session id
    + rrpp_id (required, int, `1`) ... Selected rrpp id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "staff": 1,
                "number_of_guests": 4,
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

### List session rrpp update [PATCH /api/1.0/club/{club_id}/list/{list_id}/session/{session_id}/rrpp/{rrpp_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + session_id (required, int, `1`) ... Selected session id
    + rrpp_id (required, int, `1`) ... Selected rrpp id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "number_of_guests": 23,
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "staff": 1,
                "number_of_guests": 23,
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### List session rrpp delete [DELETE /api/1.0/club/{club_id}/list/{list_id}/session/{session_id}/rrpp/{rrpp_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + session_id (required, int, `1`) ... Selected session id
    + rrpp_id (required, int, `1`) ... Selected rrpp id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)
