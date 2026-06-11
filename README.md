# 🛒 Variety Store

<p align="center">
  <img src="https://img.shields.io/badge/PHP-Backend-blue?style=for-the-badge&logo=php">
  <img src="https://img.shields.io/badge/MongoDB-Non--Relational%20Database-green?style=for-the-badge&logo=mongodb">
  <img src="https://img.shields.io/badge/HTML5-Frontend-orange?style=for-the-badge&logo=html5">
  <img src="https://img.shields.io/badge/CSS3-Styles-blue?style=for-the-badge&logo=css3">
</p>

<p align="center">
  Web system focused on the implementation and management of non-relational databases using MongoDB.
</p>

---

# 📑 Table of Contents

- [📖 Description](#-description)
- [🎯 Objectives](#-objectives)
- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📂 Project Structure](#-project-structure)
- [🚀 Installation](#-installation)
- [⚙️ MongoDB Configuration](#️-mongodb-configuration)
- [💻 System Usage](#-system-usage)
- [🧪 Testing](#-testing)
- [📸 Project Screenshots](#-project-screenshots)
- [🤝 Contributions](#-contributions)
- [👨‍💻 Development Team](#-development-team)
- [📄 License](#-license)

---

# 📖 Description

**Variety Store** is a web system developed as an academic project to apply the use of **non-relational databases** through MongoDB.

The system allows storing and organizing information using documents and collections, offering a flexible alternative to traditional relational databases.

The project aims to demonstrate how NoSQL structures work within a dynamic and interactive web environment.

---

# 🎯 Objectives

- Implement a non-relational database using MongoDB.
- Manage information through documents and collections.
- Understand the operation of NoSQL databases.
- Apply web technologies in a practical project.
- Develop a flexible and scalable structure.

---

# ✨ Features

✅ MongoDB implementation as a non-relational database  
✅ Use of documents and collections  
✅ Simple and intuitive interface  
✅ Modular system organization  
✅ Dynamic information management  
✅ User-friendly navigation  

---

# 🛠️ Technologies Used

| Technology | Function |
|---|---|
| HTML5 | System structure |
| CSS3 | Design and styles |
| PHP | Server-side communication |
| MongoDB | NoSQL database |
| MongoDB Compass | Visual database management |
| Visual Studio Code | Project development |

---

# 📂 Project Structure

```bash
VarietyStore/
│
├── css/
├── php/
├── img/
├── database/
│   ├── collections/
│   └── documents/
│
├── index.php
└── README.md
```

The project structure allows:

- Better organization
- Scalability
- Easier maintenance
- Understanding of non-relational databases

---

# 🚀 Installation

## 📌 Prerequisites

Before running the project, install:

- PHP 8+
- MongoDB Community Server
- MongoDB Compass
- Git
- Modern web browser

---

## ⚙️ Installation Steps

### 1️⃣ Clone the repository

```bash
git clone https://github.com/dectorserranodaianam3s2-creator/Tiendavariada-.git
```

---

### 2️⃣ Access the project folder

```bash
cd Tiendavariada-
```

---

### 3️⃣ Configure the local environment

Place the project inside your local server environment.

---

### 4️⃣ Start MongoDB

Run MongoDB from services or terminal.

---

### 5️⃣ Run the project

Open the project from your local browser.

---

# ⚙️ MongoDB Configuration

## 📌 Create database

Open MongoDB Compass and create:

```bash
VarietyStore
```

---

## 📌 Create collections

Example:

- products
- categories
- users

---

## 📌 Import documents

Import `.json` files if included in the project.

---
# 🗄️ Arquitectura de la Base de Datos

El diseño de la base de datos de Variety Store fue modelado para gestionar de manera eficiente usuarios, productos, categorías, pedidos, reseñas y pagos. Aunque el proyecto utiliza MongoDB como base de datos no relacional, el siguiente Diagrama Entidad-Relación se utilizó como referencia para la estructura de los datos.
## 📊 Diagrama Entidad-Relación

```mermaid
erDiagram

    USER ||--o{ ORDER : realiza
    ORDER ||--o{ ORDER_DETAIL : contiene
    ...

    USER ||--o{ ORDER : realiza
    ORDER ||--o{ ORDER_DETAIL : contiene
    PRODUCT ||--o{ ORDER_DETAIL : incluye
    CATEGORY ||--o{ PRODUCT : clasifica
    USER ||--o{ REVIEW : escribe
    PRODUCT ||--o{ REVIEW : recibe
    ORDER ||--|| PAYMENT : tiene

    USER {
        int id_user PK
        string nombre
        string correo
        string contraseña
    }

    PRODUCT {
        int id_product PK
        string nombre
        float precio
        int stock
        string descripcion
        string imagen
        int id_category FK
    }

    CATEGORY {
        int id_category PK
        string nombre
        string descripcion
    }

    ORDER {
        int id_order PK
        date fecha
        float total
        string estado
        int id_user FK
    }

    ORDER_DETAIL {
        int id_detail PK
        int cantidad
        float precio_unitario
        int id_order FK
        int id_product FK
    }

    REVIEW {
        int id_review PK
        int calificacion
        string comentario
        int id_user FK
        int id_product FK
    }

    PAYMENT {
        int id_payment PK
        string metodo
        string estado
        int id_order FK
    }
```

# 💻 System Usage

The system allows:

- Consulting information
- Managing documents
- Viewing stored data
- Understanding MongoDB functionality
- Exploring NoSQL structures

---

# 🧪 Testing

To verify correct functionality:

1. Start MongoDB.
2. Verify database connection.
3. Check document loading.
4. Test navigation and interaction.

---

# 📸 Project Screenshots

You can add project images here:

```md
![Home](img/home.png)
![MongoDB](img/mongodb.png)
```

---

# 🤝 Contributions

If you want to contribute:

## 1️⃣ Fork the repository

Create a copy of the repository.

---

## 2️⃣ Create a branch

```bash
git checkout -b feature/new-feature
```

---

## 3️⃣ Make changes

```bash
git add .
git commit -m "New feature added"
```

---

## 4️⃣ Push changes

```bash
git push origin feature/new-feature
```

---

## 5️⃣ Open a Pull Request

Submit your changes for review.

---

# 👨‍💻 Development Team

| Role | Member |
|---|---|
| Scrum Master | Valentina Contreras Hernández |
| Integration Specialist | Daiana Dector Serrano |
| Query Developer | Paolette Calvo Lara |
| Data Seeder | Vanessa Aponte Morales |
| Data Model | Itzel Trujillo Velázquez |

---

# 📄 License

Project developed for educational purposes.

---

# ⭐ Acknowledgments

Thank you for visiting this project.

If you liked the repository, feel free to give it a ⭐ on GitHub.
