<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=FFD6E8&height=200&section=header&text=Varied%20Store&fontSize=45&fontColor=ffffff&animation=fadeIn"/>
</p>
<div align="center">

# 🌸 Varied Store 🌸

### ✿ Database Project ✿

<img src="https://img.shields.io/badge/database-MongoDB-8BD3DD?style=for-the-badge">
<img src="https://img.shields.io/badge/status-In%20Development-FFC8DD?style=for-the-badge">
<img src="https://img.shields.io/badge/version-1.0-CDB4DB?style=for-the-badge">
<img src="https://img.shields.io/badge/type-NoSQL%20Database-FFAFCC?style=for-the-badge">

</div>

<div style="background-color:#FFD6E8; padding:20px; border-radius:15px">

---

🌸 ───── ✿ ───── 🌸

## 🌼 Team Members

* **Blanca Paolette Calvo Lara** – Data Modeler
* **Vanessa Aponte Morales** – Query Developer
* **Daiana Angelica Dector Serrano** – Integration Specialist
* **Valentina Contreras Hernandez** – Data Seeder / QA

---

🌸 ───── ✿ ───── 🌸

## 📌 Project Description

This project consists of the design and implementation of a **MongoDB database** that simulates the operation of a **varied store**.

The system manages different product categories and records customer purchases, payment methods, and sales tickets.

The categories included in the store are:

* 🧺 White Goods
* 👕 Clothing
* 🧸 Toys
* 💻 Electronics
* 🪑 Furniture
* ⚽ Sports

The objective is to demonstrate the implementation of **NoSQL database modeling**, using **embedding and referencing strategies**.

---

🌸 ───── ✿ ───── 🌸

## 💡 Why did we choose this topic?

We chose this project because we believe that **online shopping platforms make purchasing products easier and more accessible**.

Our application simulates a store where users can browse different categories, purchase products, and generate tickets without leaving the comfort of their home.

This project also allows us to demonstrate **database design, data modeling, and query development using MongoDB**.

---

🌸 ───── ✿ ───── 🌸

## 🗂 Database Model

```mermaid
erDiagram
CUSTOMERS {
 string customer_id
 string name
 string phone
}
PRODUCTS {
 string product_id
 string name
 number price
}
SALES {
 string sale_id
 string customer_id
 number total
}
PAYMENT_METHODS {
 string payment_id
 string method_name
}
TICKETS {
 string ticket_id
 string sale_id
 date date
}

CUSTOMERS ||--o{ SALES : makes
SALES ||--|{ PRODUCTS : contains
SALES }o--|| PAYMENT_METHODS : uses
SALES ||--|| TICKETS : generates
```

This diagram represents the **structure of the database** and the relationships between the main entities of the system.
## Database Diagram Preview

<p align="center">
<img src="https://mermaid.ink/img/pako:eNpVkE1PwzAMhf-K5TqYl9nAhhMZsZqg0nQz8pN7k0w0bkl1tE3rHhG3hG3x7HfC6l5k8pL3zvZ9n5x3mJ0zT1Vn4R2qkQk4oVJbB8xgYvXc4bJ3oW0FhU0K5o2mQj3m2yJzT0WZ0m1y4p4XhW5cRkU2i4G0i4V2H0qV9xqYdVqWq9jJdKq2c2y8W1C1W6cYdK8s7H5n9g1y3a8M0Y0j0yY0J9YFJgZ7VxQx0oY2u5tq0uF0f0yq6zq0t6w3y9y2sY1W6nq1u2y5k9X0q4c0c3m7k3p7v1m9n7W3c7o6y4y9k1o4n1u8p9u6o6y1n3u1l0u0ZQAA"
width="600">
</p>

This preview represents the structure of the store database.
---

🌸 ───── ✿ ───── 🌸

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

## 🏷 Version

**Release v1.0**

</div>

<p align="center">

🌸 Thank you for visiting our repository 🌸

</p>


<p align="center">
