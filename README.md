<div align="center">
<div align="center">

---

## 🛒 Database Description

This project represents a **NoSQL database for a varied store** that sells:

- Electronics
- Home appliances
- Clothing
- Furniture
- Home products

The database was created using **MongoDB Atlas**.

---

## 📦 Collections

The database contains the following collections:

- clients
- productos
- categorias
- ventas
- detalle_ventas
- empleados
- proveedores

---

## 🔗 Relationships

- One **client** can make many **sales**
- One **sale** can contain many **products**
- One **product** can appear in many **sales**

This creates a **many-to-many relationship between SALES and PRODUCTS**, solved with the collection:

**detalle_ventas**

---


## 🌼 Team Members

* **Blanca Paolette Calvo Lara** – Data Modeler
* **Vanessa Aponte Morales** – Query Developer
* **Daiana Angelica Dector Serrano** – Integration Specialist
* **Valentina Contreras Hernandez** – Data Seeder / QA

---



🌸 ───── ✿ ───── 🌸

## 💡 Why did we choose this topic?

We chose this project because we believe that **online shopping platforms make purchasing products easier and more accessible**.

Our application simulates a store where users can browse different categories, purchase products, and generate tickets without leaving the comfort of their home.

This project also allows us to demonstrate **database design, data modeling, and query development using MongoDB**.

---

## 📊 Entity Relationship Model

```mermaid
erDiagram

CLIENTES ||--o{ VENTAS : realiza
VENTAS ||--o{ DETALLE_VENTAS : contiene
PRODUCTOS ||--o{ DETALLE_VENTAS : incluye
CATEGORIAS ||--o{ PRODUCTOS : clasifica
PROVEEDORES ||--o{ PRODUCTOS : suministra
EMPLEADOS ||--o{ VENTAS : registra
```

<p align="center">
<img src="https://mermaid.ink/img/pako:eNpVkE1PwzAMhf-K5TqYl9nAhhMZsZqg0nQz8pN7k0w0bkl1tE3rHhG3hG3x7HfC6l5k8pL3zvZ9n5x3mJ0zT1Vn4R2qkQk4oVJbB8xgYvXc4bJ3oW0FhU0K5o2mQj3m2yJzT0WZ0m1y4p4XhW5cRkU2i4G0i4V2H0qV9xqYdVqWq9jJdKq2c2y8W1C1W6cYdK8s7H5n9g1y3a8M0Y0j0yY0J9YFJgZ7VxQx0oY2u5tq0uF0f0yq6zq0t6w3y9y2sY1W6nq1u2y5k9X0q4c0c3m7k3p7v1m9n7W3c7o6y4y9k1o4n1u8p9u6o6y1n3u1l0u0ZQAA"
width="600">
</p>

This preview represents the structure of the store database.
---

🌸 ───── ✿ ───── 🌸

 ---



## 🎨 Interface Prototype

The interface of the store was designed using **Figma**.

You can view the interactive prototype here:

https://wave-flow-16148775.figma.site/

The prototype shows how users can navigate the store, view products, and simulate purchases.

---

🌸 ───── ✿ ───── 🌸

---

## 🧩 Embedding Strategy

In this project we use **embedding** to store related data inside the same document.

Example:

```json
{
 "sale_id": "S001",
 "customer": {
   "customer_id": "C001",
   "name": "Juan Perez"
 },
 "products": [
   {
     "product_id": "P01",
     "name": "Laptop",
     "price": 15000
   },
   {
     "product_id": "P02",
     "name": "Mouse",
     "price": 250
   }
 ],
 "total": 15250
}
```

Embedding improves performance because **related information can be retrieved in a single query**.

---

🌸 ───── ✿ ───── 🌸

## 🔗 Referencing Strategy

We also apply **referencing** when it is necessary to keep data in separate collections.

Example:

```json
{
 "sale_id": "S001",
 "customer_id": "C001",
 "payment_method_id": "PM01"
}
```

The referenced data is stored in other collections such as:

* Customers
* Products
* Payment Methods

This approach helps maintain **data normalization and flexibility**.

---

🌸 ───── ✿ ───── 🌸

## 📂 Project Structure

```

VariedStore
│
├── database
│   ├── collections.js
│   ├── seed_data.js
│
├── queries
│   ├── sales_queries.js
│   ├── product_queries.js
│
├── diagrams
│   └── er_diagram.md
│
└── README.md
```

This structure organizes the project into **database configuration, queries, and documentation**.

---

🌸 ───── ✿ ───── 🌸

## ⚙️ How to Run the Project

1. Install **MongoDB**
2. Clone the repository

```
git clone https://github.com/dectorserranodaianam3s2-creator/Tiendavariada-.git
```

3. Insert seed data into the database
4. Execute queries to simulate store operations

---

🌸 ───── ✿ ───── 🌸

## 🚀 Future Improvements

Possible improvements for future versions:

* Add a **web interface**
* Implement **user authentication**
* Integrate **inventory management**
* Connect the database to a **full web application**

---

🌸 ───── ✿ ───── 🌸

## 🤖 AI Usage Statement

The development team certifies that **AI tools were used only as mentors** to explain concepts and help debug errors.

All code and project decisions were **reviewed, validated, and implemented by the team members**.

Signature:
**Development Team No. 11**

---

🌸 ───── ✿ ───── 🌸

---

## 👀 Repository Visits

<p align="center">

<img src="https://komarev.com/ghpvc/?username=dectorserranodaianam3s2-creator&color=ffb6c1&style=for-the-badge">

</p>
---

🌸 ───── ✿ ───── 🌸


## 🏷 Version

**Release v1.0**

</div>

<p align="center">

🌸 Thank you for visiting our repository 🌸

</p>


<p align="center">
