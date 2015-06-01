### List guest [GET /api/1.0/club/{club_id}/list/{list_id}/guest/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id

+ Request
    + Headers

            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "count": 0,
                "next": null,
                "previous": null,
                "results": []
            }

+ Response 400 (application/json)

            {
                "status": 400,
                "exception": "You must be a member of the club assigned",
                "traceback": "None\n"
            }

### List guest create [POST /api/1.0/club/{club_id}/list/{list_id}/guest]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id

+ Request
    + Headers

            Authorization: JWT [token]
            
    + Body

            {
                "aggregator": 1
                "number_of_guests": 10,
                "used": 0,
                "email": "mail@mail.com",
                "phone": "111 000 111",
                "drink": 1
            }

+ Response 204 (application/json)

+ Response 400 (application/json)

            {
                "status": 400,
                "exception": "You must be a member of the club assigned",
                "traceback": "None\n"
            }

### List guest delete [DELETE /api/1.0/club/{club_id}/list/{list_id}/guest/{guest_id}]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id
    + guest_id (required, int, `1`) ... Selected guest id

+ Request
    + Headers

            Authorization: JWT [token]
    
+ Response 204 (application/json)

+ Response 400 (application/json)

            {
                "status": 400,
                "exception": "You must be a member of the club assigned",
                "traceback": "None\n"
            }

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }
