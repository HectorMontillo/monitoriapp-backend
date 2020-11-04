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
  "rol": 1
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
