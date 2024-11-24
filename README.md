# **Royal Cars - Sistema de Reservas**

## **Descripción**
Royal Cars es una API para gestionar reservas de autos. Permite realizar operaciones CRUD para las entidades principales del negocio, incluyendo clientes, autos, ubicaciones, disponibilidades y reservas. La base de datos se implementa usando MySQL en un contenedor Docker.

---

## **Características**

- CRUD completo para las entidades:
  - **Clientes (Person)**: Información de los clientes que realizan reservas.
  - **Autos (Car)**: Vehículos disponibles para alquiler.
  - **Ubicaciones (Location)**: Sucursales donde se encuentran los autos.
  - **Disponibilidad (Availability)**: Fechas en las que los autos están disponibles.
  - **Reservas (Reservation)**: Transacciones de alquiler, vinculando clientes con autos en un período de tiempo.
- Manejo de relaciones entre entidades (1:N, N:1).
- Gestión de errores y validación de datos.
- Base de datos MySQL gestionada mediante Docker.

---

## **Requisitos**

- **Node.js** (v14 o superior)
- **npm** (v6 o superior)
- **Docker** (v20 o superior)
- **Angular* (Ultima version)
---

## **Instalación**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-repositorio/royal-cars.git
   cd royal-cars
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   DB_HOST=localhost
   DB_USER=usuario
   DB_PASSWORD=aws_proyecto
   DB_NAME=aws_proyecto
   DB_PORT=3306
   PORT=3000
   ```

4. Inicia la base de datos usando Docker:
   ```bash
   docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=aws_proyecto -e MYSQL_DATABASE=aws_proyecto -e MYSQL_USER=usuario -e MYSQL_PASSWORD=aws_proyecto -p 3306:3306 -d mysql:latest
   ```

5. Inicia el servidor:
   ```bash
   npm start
   ```

---

## **Uso**

### **Entidades Principales**

- **Clientes (Person)**
  - **Ruta base**: `/api/person`
  - **Campos**: `firstName`, `lastName`, `email`, `phone`

- **Autos (Car)**
  - **Ruta base**: `/api/car`
  - **Campos**: `brand`, `model`, `year`, `pricePerDay`, `locationId`

- **Ubicaciones (Location)**
  - **Ruta base**: `/api/location`
  - **Campos**: `name`, `address`, `city`, `country`

- **Disponibilidad (Availability)**
  - **Ruta base**: `/api/availability`
  - **Campos**: `availableDate`, `isAvailable`, `carId`

- **Reservas (Reservation)**
  - **Ruta base**: `/api/reservation`
  - **Campos**: `customerId`, `carId`, `startDate`, `endDate`, `totalPrice`

### **Documentación de Endpoints**

1. **Clientes (Person)**
   - **Crear un cliente**:
     ```bash
     curl -X POST http://localhost:3000/api/person \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Juan","lastName":"Pérez","email":"juan.perez@example.com","phone":"5551234567"}'
     ```
   - **Obtener todos los clientes**:
     ```bash
     curl -X GET http://localhost:3000/api/person
     ```
   - **Más ejemplos**: Repite para las operaciones CRUD de las demás entidades.

---

## **Gestión de la Base de Datos con Docker**

### **Creación del Contenedor MySQL**
Utiliza el siguiente comando para iniciar un contenedor MySQL configurado para este proyecto:
```bash
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=aws_proyecto -e MYSQL_DATABASE=aws_proyecto -e MYSQL_USER=usuario -e MYSQL_PASSWORD=aws_proyecto -p 3306:3306 -d mysql:latest
```

### **Comandos Comunes**

- **Listar contenedores activos**:
  ```bash
  docker ps
  ```

- **Acceder al contenedor MySQL**:
  ```bash
  docker exec -it mysql-container mysql -u usuario -p
  ```
  Introduce la contraseña `aws_proyecto` cuando se te solicite.

- **Detener el contenedor**:
  ```bash
  docker stop mysql-container
  ```

- **Eliminar el contenedor**:
  ```bash
  docker rm mysql-container
  ```

---

## **Estructura del Proyecto**

```plaintext
src/
├── controllers/       # Lógica de controladores
│   ├── availabilityController.js
│   ├── carController.js
│   ├── locationController.js
│   ├── personController.js
│   ├── reservationController.js
├── models/            # Definición de modelos Sequelize
│   ├── availability.js
│   ├── car.js
│   ├── index.js
│   ├── location.js
│   ├── person.js
│   ├── reservation.js
├── routes/            # Definición de rutas
│   ├── availabilityRoutes.js
│   ├── carRoutes.js
│   ├── locationRoutes.js
│   ├── personRoutes.js
│   ├── reservationRoutes.js
├── config/            # Configuración del proyecto
│   ├── dbConfig.js
├── public/            # Archivos estáticos (si aplica)
├── app.js             # Configuración de la aplicación Express
├── server.js          # Archivo principal para iniciar el servidor
```

---

## **Cómo Contribuir**

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Haz tus cambios y confirma los commits:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Envía tus cambios al repositorio remoto:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request en GitHub.

