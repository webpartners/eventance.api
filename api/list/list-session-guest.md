# List session guest [/api/1.0/club/{club_id}/list/{list_id}/session/{session_id}/guest/]

The list session guest API

### List session guest create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + session_id (required, int, `1`) ... Selected session id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "drink": "",
                "aggregator": 1,
                "number_of_guests": 100,
                "used": 20,
                "email": "mail@mail.es",
                "phone": "983439744587"
            }
            
+ Response 200 (application/json)

            {
                "id": 1,
                "drink": "",
                "aggregator": 1,
                "number_of_guests": 100,
                "used": 20,
                "email": "mail@mail.es",
                "phone": "983439744587"
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### List session guest list [GET]

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
                        "drink": "",
                        "aggregator": 1,
                        "number_of_guests": 100,
                        "used": 20,
                        "email": "mail@mail.es",
                        "phone": "983439744587"
                    },
                    {
                        "id": 1,
                        "drink": "",
                        "aggregator": 1,
                        "number_of_guests": 100,
                        "used": 20,
                        "email": "mail@mail.es",
                        "phone": "983439744587"
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### List session guest detail [GET /api/1.0/club/{club_id}/list/{list_id}/session/{session_id}/guest/{guest_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + session_id (required, int, `1`) ... Selected session id
    + guest_id (required, int, `1`) ... Selected guest id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "drink": "",
                "aggregator": 1,
                "number_of_guests": 100,
                "used": 20,
                "email": "mail@mail.es",
                "phone": "983439744587"
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

### List session guest update [PATCH /api/1.0/club/{club_id}/list/{list_id}/session/{session_id}/guest/{guest_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + session_id (required, int, `1`) ... Selected session id
    + guest_id (required, int, `1`) ... Selected guest id

+ Request
    + Headers
    
            Authorization: JWT [token]
    + Body

            {
                "drink": "",
                "number_of_guests": 200,
                "used": 20,
                "email": "mail@mail.es",
                "phone": "983439744587"
            }

+ Response 200 (application/json)

            {
                "id": 1,
                "drink": "",
                "aggregator": 1,
                "number_of_guests": 200,
                "used": 20,
                "email": "mail@mail.es",
                "phone": "983439744587"
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

### List session guest delete [DELETE /api/1.0/club/{club_id}/list/{list_id}/session/{session_id}/guest/{guest_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + session_id (required, int, `1`) ... Selected session id
    + guest_id (required, int, `1`) ... Selected guest id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 204 (application/json)
