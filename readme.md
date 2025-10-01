# Prueba tecnica - SaroaTask

Una aplicación simple donde puedas:
✅ Ver una lista de tus tareas pendientes
➕ Agregar nuevas tareas
✔️ Marcar tareas como completadas
🗑️ Eliminar tareas que ya no necesites


## Backend - API REST (25-30 min)
```
Crea una API con estos 4 endpoints:
Método
Endpoint
Descripción
GET
/tasks
Obtener todas las tareas
POST
/tasks
Crear una nueva tarea
PUT
/tasks/:id/complete
Marcar tarea como completada
DELETE
/tasks/:id
Eliminar una tarea
```
# Frontend - Interfaz Web
```
Crea una aplicación que tenga:
Lista de tareas mostrando título y estado (pendiente/completada)
Formulario para agregar nuevas tareas
Botón "Completar" para cada tarea pendiente
Botón "Eliminar" para cada tarea
Diseño responsive que se vea bien en móvil
Integración 
El frontend debe consumir tu API REST
```


# Instalacion:
Desde la raiz del proyecto, crear el archivo
.env
```
# Django
DEBUG=True
SECRET_KEY=tu_clave_super_secreta
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1

# PostgreSQL
DATABASE_NAME=mi_base
DATABASE_USER=mi_usuario
DATABASE_PASSWORD=mi_clave
DATABASE_HOST=db
DATABASE_PORT=5432
```

comandos de docker:
```
docker-compose up --build
```

comandos docker para ejecutar comandos de de python
```
docker-compose exec web python manage.py migrate
docker-compose exec web python manage.py createsuperuser

```