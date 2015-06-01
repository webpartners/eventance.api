# Event Event-Session [/api/1.0/club/{club_id}/event/{event_id}/event-session/?{?from,to}]

The Event Event-Session API

### Event Event-Session List [GET]

+ Parameters

    + club_id (required, int, `1`) ... Selected club id
    + event_id (required, int, `1`) ... Selected event id
    + from (optional, date) ... Start time of Filter by start_time (YYYY-MM-DD)
    + to (optional, date) ... End time of Filter by start_time (YYYY-MM-DD)

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
                        "id": "http://localhost:8000/api/1.0/club/1/session/1",
                        "start_date": "2015-05-18T10:17:18.000000Z",
                        "end_date": "2015-05-18T11:27:20.000000Z",
                        "event": "http://localhost:8000/api/1.0/club/1/event/1",
                        "name": "event-session 001"
                    }
                ]
            }

+ Response 401 (application/json)

            {
                "status": 401,
                "exception": "You are not allowed to access the content",
                "traceback": "None\n"
            }

### Event Event-Session Create [POST]

+ Parameters

    + club_id (required, int, `1`) ... Selected club id
    + event_id (required, int, `1`) ... Selected event id

+ Request
    + Headers
    
            Authorization: JWT [token]

    + Body

            {
                "name":"Session 5",
                "start_date":"2015-04-28T11:47:51Z",
                "end_date":"2015-04-28T16:47:51Z"
            }

+ Response 200 (application/json)

            {
                "id": "http://localhost:8000/api/1.0/club/1/session/2",
                "start_date": "2015-05-18T10:13:06.000000Z",
                "end_date": "2015-05-18T14:13:07.000000Z",
                "event": "http://localhost:8000/api/1.0/club/1/event/1",
                "name": "Session 5"
            }
