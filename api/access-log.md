# Access log [/api/1.0/club/{club_id}/access-log/]

The Access log API

### Access log list [GET]

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
                  "time": "2015-06-03T13:05:15Z",
                  "inout": "IN",
                  "wrong": false,
                  "drinks_taken": 100,
                  "staff": 1,
                  "session": 1
                }
              ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }
            
### Access log detail [GET /api/1.0/club/{club_id}/access-log/{access_log_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + access_log_id (required, int, `1`) ... Selected access log id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "time": "2015-06-03T13:05:15Z",
                "inout": "OUT",
                "wrong": false,
                "drinks_taken": 100,
                "staff": 1,
                "session": 1
            }

+ Response 401 (text/html)

            You are not allowed to access the content
