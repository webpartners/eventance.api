# Flyer log [/api/1.0/club/{club_id}/flyer-log/]

The Flyer log API

### Flyer log list [GET]

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
                  "user": 1,
                  "time": "2015-06-03T13:05:15Z",
                  "flyer": 1,
                  "staff": 1
              ]
            }
            
+ Response 401 (application/json)

            {
                "detail": "Las credenciales de autenticación no se proveyeron."
            }
            
### Flyer log detail [GET /api/1.0/club/{club_id}/flyer-log/{flyer_log_id}/]

+ Parameters
    + club_id (required, int, `1`) ... Selected club id
    + flyer_log_id (required, int, `1`) ... Selected flyer log id

+ Request
    + Headers
    
            Authorization: JWT [token]

+ Response 200 (application/json)

            {
                "id": 1,
                "user": 1,
                "time": "2015-06-03T13:05:15Z",
                "flyer": 1,
                "staff": 1
            }

+ Response 401 (text/html)

            You are not allowed to access the content
