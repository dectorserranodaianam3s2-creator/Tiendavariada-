# 🛒 Tienda Variada - Base de Datos MongoDB

Proyecto de base de datos NoSQL desarrollado con **MongoDB Atlas** para gestionar la información de una tienda con diferentes categorías de productos, inventario, ventas, empleados y proveedores.

---

# Descripción del Proyecto

Este proyecto consiste en el diseño e implementación de una base de datos NoSQL para una tienda variada, utilizando MongoDB. El sistema permite administrar información relacionada con productos, categorías, proveedores, inventario, ventas y empleados.

El objetivo del proyecto es organizar y gestionar los datos de la tienda de forma eficiente, permitiendo registrar productos en distintas categorías, controlar el inventario disponible, almacenar información de los proveedores y registrar las ventas realizadas.

La base de datos está estructurada mediante diferentes colecciones que representan las entidades principales del sistema. Además, se diseñó un modelo entidad–relación para mostrar cómo se relacionan los datos entre sí, incluyendo relaciones como la clasificación de productos por categorías y la relación entre productos y proveedores.

Este proyecto también incluye consultas para obtener información de la base de datos, así como datos de prueba en formato JSON para validar el funcionamiento del sistema.

---
# 📦 Base de Datos

**Nombre de la base de datos**

```
tienda_variada
```

**Connection String**

```
mongodb+srv://dectorserranodaianam3s2_db_user:<db_password>@cluster0.W1txzzzz.mongodb.net/tienda_variada
```

⚠️ La contraseña se mantiene oculta por seguridad.

---
# Prototipo de nuestro proyecto

https://wave-flow-16148775.figma.site/

---
+

# 🧰 Tecnologías Utilizadas

* MongoDB Atlas
* MongoDB Compass
* MongoDB Shell
* Node.js (para conexión)
* GitHub
* Mermaid (diagramas)

---

# 📂 Colecciones de la Base de Datos

La base de datos contiene las siguientes colecciones:

| Colección   | Descripción                  |
| ----------- | ---------------------------- |
| categoria   | Clasificación de productos   |
| productos   | Información de los productos |
| inventario  | Control de stock             |
| ventas      | Registro de ventas           |
| empleados   | Información de empleados     |
| proveedores | Proveedores de productos     |

   ---

## Modelo Entidad–Relación

```mermaid
erDiagram
    CATEGORIAS {
        int categoriaID
        string nombre
        string descripcion
        date fechaCreacion
    }

    PRODUCTOS {
        int productoID
        string nombre
        string descripcion
        float precio
        int categoriaID
    }

    PROVEEDORES {
        int proveedorID
        string nombre
        string telefono
        string email
    }

    PRODUCTO_PROVEEDOR {
        int productoID
        int proveedorID
    }

    INVENTARIO {
        int inventarioID
        int productoID
        int cantidad
        date ultimaActualizacion
    }

    VENTAS {
        int ventaID
        int productoID
        int cantidad
        float total
        date fechaVenta
    }

    EMPLEADOS {
        int empleadoID
        string nombre
        string puesto
        string telefono
    }

    CATEGORIAS ||--o{ PRODUCTOS : clasifica
    PRODUCTOS ||--o{ INVENTARIO : tiene
    PRODUCTOS ||--o{ VENTAS : registra
    PRODUCTOS ||--o{ PRODUCTO_PROVEEDOR : relacion
    PROVEEDORES ||--o{ PRODUCTO_PROVEEDOR : suministra
```
 ## Conexión a la base de datos (ns.json)

Este archivo contiene la configuración de conexión a la base de datos MongoDB utilizada en el proyecto.

```json
{
  "connectionString": "mongodb://localhost:27017",
  "database": "hospital_pediatrico",
  "collections": [
    "categoria",
    "productos",
    "inventario",
    "ventas",
    "empleados",
    "proveedores"
  ]
}
```
---


# 🔄 Relación Muchos a Muchos

Existe una relación **Muchos a Muchos (N:N)** entre:

**Productos ↔ Proveedores**

Esto significa:

* Un **producto** puede tener varios **proveedores**.
* Un **proveedor** puede suministrar varios **productos**.

Para representar esta relación se utiliza la colección intermedia:

```
producto_proveedor
```

| producto_id | proveedor_id |
| ----------- | ------------ |

---

# 🚀 Ejemplo de Conexión (Node.js)

```javascript
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://dectorserranodaianam3s2_db_user:<db_password>@cluster0.xxxxx.mongodb.net/tienda_variada";

const client = new MongoClient(uri);

async function conectar() {
    await client.connect();
    console.log("Conectado a MongoDB Atlas");
}

conectar();

```

# 📊 Estructura de la Base de Datos

```
tienda_variada
│
├── categoria
├── productos
├── inventario
├── ventas
├── empleados
└── proveedores

---
```

#📝 Reporte de Consultas en MongoDB
```
📌 Introducción

En el presente reporte se describen las operaciones realizadas en una base de datos utilizando MongoDB, con el objetivo de gestionar información dentro de la colección usuarios.
Se aplicaron las operaciones básicas conocidas como CRUD (Crear, Leer, Actualizar y Eliminar), fundamentales en el manejo de bases de datos.

---

📚 Marco teórico / Aprendizajes previos

Para poder realizar las consultas en MongoDB, fue necesario comprender diversos conceptos clave relacionados con las bases de datos NoSQL.

MongoDB es un sistema de gestión de bases de datos orientado a documentos, donde la información se almacena en formato JSON. A diferencia de las bases de datos relacionales, utiliza colecciones en lugar de tablas.

Una colección es un conjunto de documentos, mientras que un documento es una estructura que contiene datos organizados en pares clave-valor, como nombre, edad o correo electrónico.

También se comprendió el concepto de CRUD, que engloba las operaciones básicas:

- Crear (insertar datos)
- Leer (consultar información)
- Actualizar (modificar datos)
- Eliminar (borrar registros)

Además, se aprendió el uso de operadores como:

- "$gt" (mayor que)
- "$lt" (menor que)
- "$set" (actualizar campos)

Estos conocimientos fueron fundamentales para poder manipular correctamente la información dentro de la base de datos.

---

🗂️ Base de Datos

- Nombre: "mi_base_datos"
- Colección: "usuarios"

---

1️⃣ Inserción de Datos (CREATE)

➤ Código

db.usuarios.insertOne({
  nombre: "Juan",
  edad: 25,
  email: "juan@email.com"
});

db.usuarios.insertMany([
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 22 }
]);

➤ Argumento

Estas operaciones permiten agregar nuevos documentos a la colección. Son esenciales para registrar información de usuarios dentro de la base de datos, facilitando su almacenamiento estructurado.

---

2️⃣ Consulta de Datos (READ)

➤ Código

db.usuarios.find();

db.usuarios.find({ edad: { $gt: 25 } });

db.usuarios.findOne({ nombre: "Ana" });

➤ Argumento

Las consultas permiten recuperar información almacenada en la base de datos. El uso de filtros, como "$gt", facilita obtener únicamente los datos relevantes, optimizando el análisis y la toma de decisiones.

---

3️⃣ Actualización de Datos (UPDATE)

➤ Código

db.usuarios.updateOne(
  { nombre: "Juan" },
  { $set: { edad: 26 } }
);

db.usuarios.updateMany(
  { edad: { $lt: 25 } },
  { $set: { joven: true } }
);

➤ Argumento

Las operaciones de actualización permiten modificar información existente. Esto es importante para mantener los datos actualizados y agregar nuevos atributos que mejoren la organización de la información.

---

4️⃣ Eliminación de Datos (DELETE)

➤ Código

db.usuarios.deleteOne({ nombre: "Luis" });

db.usuarios.deleteMany({ edad: { $lt: 23 } });

➤ Argumento

Estas operaciones permiten eliminar datos innecesarios o incorrectos dentro de la base de datos, lo que contribuye a mantener la información limpia y relevante.

---

5️⃣ Conexión con Node.js

➤ Código

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("mi_base_datos");
    const collection = db.collection("usuarios");

    await collection.insertOne({ nombre: "Carlos", edad: 28 });

    const usuarios = await collection.find().toArray();
    console.log(usuarios);

  } finally {
    await client.close();
  }
}

run();

➤ Argumento

La conexión con Node.js permite interactuar con la base de datos desde una aplicación, lo que es fundamental para el desarrollo de sistemas dinámicos que requieren almacenar y consultar información en tiempo real.

---

⚠️ Seguridad

Es importante no compartir credenciales reales de conexión a la base de datos.

Ejemplo incorrecto:

mongodb+srv://usuario:password@cluster...

Ejemplo correcto:

mongodb+srv://usuario:<password>@cluster...

---

📊 Conclusión

En este reporte se aplicaron las operaciones básicas de MongoDB (CRUD), lo que permitió gestionar la información de manera eficiente dentro de la colección usuarios.

Además, se comprendió la importancia de cada tipo de consulta para manipular datos de forma precisa, así como su utilidad en el desarrollo de aplicaciones reales.

Finalmente, se concluye que MongoDB es una herramienta flexible y potente para el manejo de bases de datos NoSQL, permitiendo trabajar con grandes volúmenes de información de manera eficiente.

---

# 👥 Miembros del Equipo
Nadia Itzel Trujillo Velázquez_The Data Modeler
Daiana Angelica_The integration Specialist 
Blanca Paollete_The Query Developer 
Valentina Contreras_The Data Seder
Vanessa Aponte Morales_The Data Seder



---

# 👩‍💻 Autor

Proyecto desarrollado como práctica de **modelado de bases de datos NoSQL utilizando MongoDB Atlas**.

---

#
<p align="center">
