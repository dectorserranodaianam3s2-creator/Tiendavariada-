# 📊 Schema Design – Tienda Variada

## Entity Relationship Diagram

```mermaid
erDiagram

    USER {
        ObjectId _id PK
        string name
        string email
        boolean active_status
        date created_at
    }

    PRODUCT {
        ObjectId _id PK
        string name
        string category
        number price
        object attributes
        number stock
        date created_at
    }

    ORDER {
        ObjectId _id PK
        ObjectId user_id FK
        array items
        number total_amount
        string status
        date created_at
    }

    PAYMENT {
        ObjectId _id PK
        ObjectId order_id FK
        string payment_method
        number amount
        string payment_status
        date payment_date
    }

    TICKET {
        ObjectId _id PK
        ObjectId order_id FK
        string ticket_number
        date issued_date
        number total
    }

    USER ||--o{ ORDER : places
    ORDER ||--|| PAYMENT : has
    ORDER ||--|| TICKET : generates
```

---

## 📌 Design Explanation

This schema represents a variety store system using MongoDB.

- A USER places multiple ORDERS.
- Each ORDER generates one PAYMENT.
- Each ORDER generates one TICKET.
- PRODUCTS are included inside the ORDER as an embedded array (items).

MongoDB allows flexible schemas, especially for the PRODUCT collection, where the "attributes" field can change depending on the category (clothing or electronics).

This demonstrates a polymorphic design approach.
