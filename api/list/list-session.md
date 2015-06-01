# List session [/api/1.0/club/{club_id}/list/{list_id}/session/]

The list session API

### List session create [POST]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body
        
            {
                "list": 11,
                "session": 21,
                "owner": 1,
                "conditions": [1,3,],
                "block_time": 100,
            }
            
+ Response 200 (application/json)

            {
                "id": 50,
                "list": 11,
                "session": 21,
                "owner": 1,
                "conditions": [1,3,],
                "block_time": 100,
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }

+ Response 401 (text/html)

            CONFLICT: duplicated object

### List session list [GET]

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
                        "id": 50,
                        "list": 11,
                        "session": 21,
                        "owner": 1,
                        "conditions": [1,3,],
                        "block_time": 100,
                    },
                    {
                        "id": 51,
                        "list": 12,
                        "session": 21,
                        "owner": 1,
                        "conditions": [2,3,],
                        "block_time": 80,
                    }
                ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }
