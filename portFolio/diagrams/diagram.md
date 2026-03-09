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
