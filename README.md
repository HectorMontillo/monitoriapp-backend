# Monitoriapp Backend

Sistema de gestión para las monitorias académicas de la Universidad Tecnológica de Pereira

# Información Técnica

## Tecnologías usadas

- JavaScript
- Node.js
- [Express](https://expressjs.com/)
- [Handlebars](https://handlebarsjs.com)
- [Sequelize](https://sequelize.org/v3/)
- [PostgreSQL](https://www.postgresql.org/)

### Instalar dependencias

Ingresar al directorio del proyecto, usar `npm install` para instalar las dependencias.

```
$ cd monitoriapp-backend
$ npm install

```

### Correr en modo desarrollo

Usar el comando `npm run dev` para correr en el entorno de `development`

```
$ npm run dev
```

### Base de Datos

Sincronizar la base de datos

```
$ npm run sync
```

Correr los seeaders

```
$ npm run seed
```

# PUBLIC FILES

Servicio de archivos estáticos:

## Fotos de perfil.

- **GET** '/uploads/profiles/**idFile** '

# API /api/

- **POST** '/login'

```json
req.body:
{
  "email":"hector.montillo@utp.edu.co",
  "password":"123"
}
```

```json
res:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NTViOTQxMC0xOGJlLTExZWItODNlNy0zZmM1NTEzNjg3MmQiLCJpYXQiOjE2MDM4NTA1ODF9.GKuZzMf81Y58oltg94FV24OYsjco-IfqsEvLT4i65jg",
  "rol": 1,
  "profile":true //Si el usuario no terminó el registro
}
```

- **POST** '/signup'

```json
req.body:
{
  "email":"hector.montillo@utp.edu.co",
  "password":"123"
}
```

```json
res:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NTViOTQxMC0xOGJlLTExZWItODNlNy0zZmM1NTEzNjg3MmQiLCJpYXQiOjE2MDM4NTA1ODF9.GKuZzMf81Y58oltg94FV24OYsjco-IfqsEvLT4i65jg",
  "gravatar": "https://s.gravatar.com/avatar/a07149755710829367c170e4f7d8c427?s=100&r=g&d=retro"
}
```

- **GET** '/get_dependencias'

```json
res:
[
    {
        "nombre": "Vicerectoría de Bienestar Universitario",
        "id": "11b73290-1e14-11eb-beeb-77a8419cc0cb"
    }

]
```

- **GET** '/get_programas_academicos'

```json
res:
[
    {
        "nombre": "Ingeniería de Sistemas y Computación",
        "id": "bff46887-fae0-4dc6-911b-64045a0fde45"
    }
]
```

- **POST** '/guardar_perfil'

**Requiere Bearer Token**

```json
req.body:
{
    "programaId": "bff46887-fae0-4dc6-911b-64045a0fde45",
    "nombres": "Persona de prueba"
}
```

```json
res:
{
    "programaId": "bff46887-fae0-4dc6-911b-64045a0fde45",
    "nombres": "Persona de prueba"
}
```

- **POST** '/actualizar_foto_perfil'

**Requiere Bearer Token**

```
req.form-data: (multipart)

    profile: archivo.jpg, jpeg o png

```

```json
res:
{
    "status": 200,
    "message": "Foto de perfil actualizada correctamente!",
    "data": {
        "name": "frame.png",
        "mimetype": "image/png",
        "size": 5302,
        "savedName": "b5bbbd30-2142-11eb-9d57-73517340dd65.png"
    }
}
```

- **GET** '/get_user'

**Requiere Bearer Token**

```json
res:
{
    "id": "b5bbbd30-2142-11eb-9d57-73517340dd65",
    "email": "hector.montillo@utp.edu.co",
    "profilePicture": "b5bbbd30-2142-11eb-9d57-73517340dd65.png",
    "gravatar": null,
    "nombres": "Hector Steven Montillo",
    "programa": "Ingeniería de Sistemas y Computación",
    "rol": "SuperAdmin",
    "rolId": 1
}
```
