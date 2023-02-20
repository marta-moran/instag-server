# Instag
Instag es una aplicación para subida de fotos y ver fotos de otros usuarios. Se ha desarrollado bajo el stack MERN. La aplicación es mobile first y se puede encontrar desplegada en el siguiente enlace: https://instag-client.vercel.app/

## Probar el proyecto
Si se quisiera probar el proyecto en local es importante instalar las dependencias con el siguiente comando

    $ npm install
    
además de cambiar la variable de entorno ORIGIN con la url localhost del cliente.

## Endpoints
## **Post routes**

| URL path                    | HTTP Method        | Action                        |
| :--------------------------:|:-----------------:|  :----------------------------:|
| /post/publishPost          | POST            | Sube una post a la BD |
| /post/fileUpload          | POST            | Sube la imagen del post a Cloudinary |
| /post/getAllPosts        | GET           | Trae todos los posts que haya subido el usuario logeado a la BD |
| /post/getOnePost/:id       | GET           | Muestra un post concreto |
| /post/explorerPost      | GET           | Muestra todos los posts de la BD |


## **User routes**

| URL path                    | HTTP Method       | Action                        |
| :--------------------------:|:-----------------:|  :----------------------------:|
| /users/getAll          | GET               | Trae a todos los usuarios de la BD  |
| /users/getUser/:id            | GET               | Trae al usuario logeado de la BD |


## **Auth routes**

| URL path                    | HTTP Method       | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| 
| /auth/signup            | POST              |  Crea un nuevo usuario            |
| /auth/login             | POST              | Loggea un usuario  (y devuelve el token) |
| /auth/verify          | GET        | Comprueba el token del usuario logeado |
