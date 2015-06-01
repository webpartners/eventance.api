### List event event-session [GET /api/1.0/club/{club_id}/list/{list_id}/event/{event_id}/event-session}]

+ Parameters
    + club_id (required, int) ... Selected club id
    + event_id (required, int) ... Selected event id

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
                        "owner": "http://localhost:8000/api/1.0/club/1/staff/1",
                        "list": "http://localhost:8000/api/1.0/club/1/list/1",
                        "session": "http://localhost:8000/api/1.0/club/1/session/1",
                        "block_time": 100,
                        "conditions": [
                            1
                        ]
                    }
                ]
            }

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }

### List event event-session create [POST /api/1.0/club/{club_id}/list/{list_id}/event/{event_id}/event-session}]

+ Parameters
    + club_id (required, int) ... Selected club id
    + event_id (required, int) ... Selected event id

+ Request
    + Headers

            Authorization: JWT [token]

    + Body

            {
                "list":"1",
                "session":"1",
                "owner":"1",
                "conditions":["1"],
                "block_time":"100"}
    
+ Response 200 (application/json)

            {
                "id": 1,
                "owner": "http://localhost:8000/api/1.0/club/1/staff/1",
                "list": "http://localhost:8000/api/1.0/club/1/list/1",
                "session": "http://localhost:8000/api/1.0/club/1/session/1",
                "block_time": 100,
                "conditions": [
                    1
                ]
            }

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }
