# Data dictionary: Varied Store
<div>
  
## Table 1: users

| Field | Type | Required | Description |
|-------|------|----------|------------|
| _id | ObjectId | Yes | Unique identifier |
| name | String | Yes | Customer full name |
| email | String | Yes | Unique email address |
| active_status | Boolean | Yes | Indicates if the user account is active |
| created_at | Date | Yes | Account creation date |

</div>

---
<div>
  
## Table 2: products

| Field | Type | Required | Description |
|-------|------|----------|------------|
| _id | ObjectId | Yes | Unique product ID |
| name | String | Yes | Product name |
| category | String | Yes | Product category (clothing or electronics) |
| price | Number | Yes | Product price |
| attributes | Object | Yes | Dynamic attributes depending on category |
| stock | Number | Yes | Available quantity |
| created_at | Date | Yes | Product creation date |

</div>

---
<div>
  
## Table 3: orders

| Field | Type | Required | Description |
|-------|------|----------|------------|
| _id | ObjectId | Yes | Unique order ID |
| user_id | ObjectId | Yes | Reference to user |
| items | Array | Yes | List of purchased products |
| total_amount | Number | Yes | Total order amount |
| status | String | Yes | Order status (pending, paid, shipped) |
| created_at | Date | Yes | Order creation date |

</div>
---
<div>
## Table 4: payments

| Field | Type | Required | Description |
|-------|------|----------|------------|
| _id | ObjectId | Yes | Unique payment ID |
| order_id | ObjectId | Yes | Reference to order |
| payment_method | String | Yes | Payment type (cash, card, transfer) |
| amount | Number | Yes | Paid amount |
| payment_status | String | Yes | Payment status (approved, rejected) |
| payment_date | Date | Yes | Date of payment |
</div>
---
<div>
## Table 5: tickets

| Field | Type | Required | Description |
|-------|------|----------|------------|
| _id | ObjectId | Yes | Unique ticket ID |
| order_id | ObjectId | Yes | Reference to order |
| ticket_number | String | Yes | Unique ticket number |
| issued_date | Date | Yes | Ticket generation date |
| total | Number | Yes | Final total amount |
</div>
