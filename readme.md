
# No stress allowed! - Application
## Endpoint Server
<br>

| Route  | Method  | Request(s)  | Response(s)  | Description  |
|---|---|---|---|---|
|  /users/register |  POST |  **Headers** <br> Note Needed<br> **Body** <br> username:*String* <br>email:*String* <br>password:*String*| **Success** <br> **201** New User Created<br> **Fail** <br> **500** Internal Server Error |  Create a user |
|  /users/login | POST  | **Headers** <br> Note Needed<br> **Body** <br>email:*String* <br>password:*String* | **Success** <br> **200** Succes Login<br> **Fail** <br> **500** Internal Server Error <br> **400** Validation Error message | User Login  |
|  /users/logingoogle | POST  | **Headers** <br> Note Needed<br> **Body** <br> id_token:*String* | **Success** <br> **200** Succes Login <br> **Fail** <br> **500** Internal Server Error <br> **400** Validation Error message |  User Login |
|  /media/weather |  GET | **Headers** <br> Note Needed<br> **Body** <br> Not Needed | **Success** <br> **200** Weathers Displayed<br> **Fail** <br> **500** Internal Server Error | Get all weather  |
|  /media |  GET |  **Headers** <br> token: *String*<br> **Body** <br> Not Needed| **Success** <br> **200** All Media Displayed<br> **Fail** <br> **500** Internal Server Error | Get all media  |
|  /media |  POST |  **Headers** <br> token: *String*<br> **Body** <br> title:*String* <br>url_link:*String* <br>review:*String*| **Success** <br> **201** New Media Created<br> **Fail** <br> **500** Internal Server Error | Create a media  |
|  /media/{id} | PUT  | **Headers** <br> token: *String*<br> **Body** <br> title:*String* <br>url_link:*String* <br>review:*String* |  **Success** <br> **200** Updated media displayed<br> **Fail** <br> **500** Internal Server Error <br> **400** Validation Error message <br> **404** Not Found|  Update one media |
|  /media/{id} | DELETE  | **Headers** <br> token: *String*<br> **Body** <br> Not Needed | **Success** <br> **200** Delete media displayed<br> **Fail**  <br> **500** Internal Server Error <br> **404** Not Found | Delete a media  |
|  /sport |  GET |  **Headers** <br> Note Needed<br> **Body** <br> Not Needed | **Success** <br> **200** All Sport displayed<br> **Fail** <br> **500** Internal Server Error |  Get all sport |


## Contributors
```
  - Frontend:
      Rizki,
      Abdul Fattah
  - Backend:
      Mas Syukur,
      Mas Adit,
      Samuel
```