# File [/api/1.0/file/]

The file API

### Fle create [POST]

+ Request
    + Headers
    
            Authorization: JWT [token]
            Content-disposition: attachment; filename=prueba.jpg
            
+ Response 200 (application/json)

            {
                "id": 1,
                "file": "/media/photo-sample.jpg"
            }

+ Response 404 (text/html)

            NOT FOUND
