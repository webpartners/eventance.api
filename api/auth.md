# Auth [/]

Token-based authorization.

### API Token create [POST /api-token-auth/]
    
+ Request

            {
                "username": "test",
                "password": "test"
            }

+ Response 200 (application/json)

            {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwib3JpZ19pYXQiOjE0MzEzMzU1MjgsInVzZXJfaWQiOjEsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZXhwIjoxNDM5MzM1NTI4fQ.s84IiGYLz649KILx2NfZ7KfLk928xcLJvMC2mNlXB6Q"
            }

+ Response 400 (application/json)

            {
                "non_field_errors": [
                    "Unable to login with provided credentials."
                ]
            }
        
### API Token refresh [POST /api-token-refresh/]

+ Request
    
            {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwib3JpZ19pYXQiOjE0MzEzMzU1MjgsInVzZXJfaWQiOjEsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZXhwIjoxNDM5MzM1NTI4fQ.s84IiGYLz649KILx2NfZ7KfLk928xcLJvMC2mNlXB6Q"
            }
    
+ Response 200 (application/json)
    
            {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwib3JpZ19pYXQiOjE0MzEzMzU1MjgsInVzZXJfaWQiOjEsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZXhwIjoxNDM5MzM1NTI4fQ.s84IiGYLz649KILx2NfZ7KfLk928xcLJvMC2mNlXB6Q"
            }

+ Response 400 (application/json)

            {
                "non_field_errors": [
                    "Error decoding signature."
                ]
            }
        
### API Token verfy [POST /api-token-verify/]

+ Request
    
            {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwib3JpZ19pYXQiOjE0MzEzMzU1MjgsInVzZXJfaWQiOjEsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZXhwIjoxNDM5MzM1NTI4fQ.s84IiGYLz649KILx2NfZ7KfLk928xcLJvMC2mNlXB6Q"
            }
    
+ Response 200 (application/json)
    
            {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwib3JpZ19pYXQiOjE0MzEzMzU1MjgsInVzZXJfaWQiOjEsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZXhwIjoxNDM5MzM1NTI4fQ.s84IiGYLz649KILx2NfZ7KfLk928xcLJvMC2mNlXB6Q"
            }

+ Response 400 (application/json)

            {
                "non_field_errors": [
                    "Error decoding signature."
                ]
            }
