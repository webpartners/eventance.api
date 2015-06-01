# Event Session [/api/1.0/club/{club_id}/event-session/?{?from,to}]

The Event Session API

### Event Session List [GET]

+ Parameters

    + club_id (required, int, `1`) ... Selected club id
    + from (optional, date, `1`) ... Start time of Filter by start_time (YYYY-MM-DD)
    + to (optional, date, `1`) ... End time of Filter by start_time (YYYY-MM-DD)

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
                  "id": 2,
                  "start_time": "2015-05-20T09:46:01.000000Z",
                  "end_time": "2015-05-20T12:46:03.000000Z",
                  "club": "http://localhost:8000/api/1.0/club/1",
                  "name": "evento 2",
                  "monday": false,
                  "tuesday": false,
                  "wednesday": false,
                  "thursday": false,
                  "friday": false,
                  "saturday": false,
                  "sunday": false,
                  "status": "1",
                  "image": "23",
                  "type": "2",
                  "start_recurrent_date": null,
                  "end_recurrent_date": null
                },
                {
                  "id": 1,
                  "start_time": "2015-05-18T10:13:06.000000Z",
                  "end_time": "2015-05-18T14:13:07.000000Z",
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
                  "type": "2",
                  "start_recurrent_date": null,
                  "end_recurrent_date": null
                }
              ]
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }
            
+ Response 401 (application/json)

            {
                "detail": "You are not a member of this club"
            }
