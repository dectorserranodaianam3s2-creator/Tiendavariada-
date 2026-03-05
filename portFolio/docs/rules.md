#  Business Rules – Tienda Variada

## General Rules

1. Every product must have:
   - name
   - category
   - price
   - attributes
   - created_at

2. Price must be greater than 0.

3. Category must be either:
   - "clothing"
   - "electronics"

---

## Clothing Rules

4. If category is "clothing", the attributes object must include:
   - size
   - color
   - fabric

---

## Electronics Rules

5. If category is "electronics", the attributes object must include:
   - voltage
   - warranty

---

## Validation Policy

If a product does not follow these rules, it should be rejected before insertion into the database.
