### List event [GET /api/1.0/club/{club_id}/list/{list_id}/event/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id

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
                        "id": "http://localhost:8000/api/1.0/club/1/event/1",
                        "start_time": "2015-05-18T10:13:06.000000Z",
                        "end_time": "2015-05-18T14:13:07.000000Z",
                        "start_recurrent_date": null,
                        "end_recurrent_date": null,
                        "club": "http://localhost:8000/api/1.0/club/1",
                        "name": "evento1",
                        "monday": false,
                        "tuesday": false,
                        "wednesday": false,
                        "thursday": false,
                        "friday": false,
                        "saturday": false,
                        "sunday": false,
                        "status": "1",
                        "image": " ",
                        "type": "2"
                    }
                ]
            }

+ Response 400 (application/json)

            {
                "status": 400,
                "exception": "You must be a member of the club assigned",
                "traceback": "None\n"
            }

### List event create [POST /api/1.0/club/{club_id}/list/{list_id}/event]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + list_id (required, int, `1`) ... Selected list id

+ Request
    + Headers

            Authorization: JWT [token]
            
    + Body

            {
                "status": 1,
                "name": "evento desde lista",
                "start_time": "2026-04-28T11:47:51Z",
                "end_time": "2038-04-28T11:47:51Z",
                "type": 1,
                "image": "sdfsdfdsfs",
                "monday": true
            }

+ Response 204 (application/json)

+ Response 400 (application/json)

            {
                "status": 400,
                "exception": "You must be a member of the club assigned",
                "traceback": "None\n"
            }
