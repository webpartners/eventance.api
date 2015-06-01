# Event [/api/1.0/club/{club_id}/event/?{?from}&{?to}]

The Event API

### Event List [GET]

+ Parameters
    + club_id (required, int) ... Selected club id
    + from (optional, date) ... Start time of Filter by start_time (YYYY-MM-DD)
    + to (optional, date) ... End time of Filter by start_time (YYYY-MM-DD)
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
            
### Event Create [POST]

+ Parameters
    + club_id (required, int) ... Selected club id
    
+ Request
    + Headers
    
            Authorization: JWT [token]
    
    + Body
        
            {
              "name": "EVENT 406",
              "start_time": "2012-09-04 06:00Z",
              "end_time": "2012-09-04 18:00Z",
              "status": "1",
              "image": "none",
              "type": "2",
              "sessions": [
                {
                  "name": "Session 106",
                  "start_date": "2012-09-04 06:00Z",
                  "end_date": "2012-09-04 12:00Z\n"
                },
                {
                  "name": "Session 206",
                  "start_date": "2012-09-04 12:00Z",
                  "end_date": "2012-09-04 18:00Z"
                }
              ]
            }
            
+ Response 200 (application/json)

            {
              "id": 3,
              "start_time": "2012-09-04T06:00:00.000000Z",
              "end_time": "2012-09-04T18:00:00.000000Z",
              "club": "http://localhost:8000/api/1.0/club/1",
              "name": "EVENT 406",
              "monday": false,
              "tuesday": false,
              "wednesday": false,
              "thursday": false,
              "friday": false,
              "saturday": false,
              "sunday": false,
              "status": "1",
              "image": "none",
              "type": "2",
              "start_recurrent_date": null,
              "end_recurrent_date": null
            }

+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }
            
+ Response 401 (application/json)

            {
                "detail": "You are not a member of this club"
            }

+ Response 400 (application/json)

            {
                  "non_field_errors": [
                    "Los campos club, name, start_time, end_time deben formar un conjunto único."
                  ]
            }

### Event detail [GET /api/1.0/club/{club_id}/event/{event_id}]

+ Parameters
    + club_id (required, int) ... Selected club id
    + event_id (required, int) ... Selected event id

+ Request

    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

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

+ Response 404 (application/json)

            {
                "detail": "No encontrado."
            }
