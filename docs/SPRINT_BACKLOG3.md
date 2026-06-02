# Sprint Backlog – Sprint 3: Sales & Transactions

## Product Goal Reference

Enable customers to purchase products and allow administrators to track sales records.

---

## 1. Sprint Goal

Implement shopping cart, sales registration, receipt generation, and sales history.

---

## 2. Sprint Parameters & Capacity Plan

| Parameter | Value |
|------------|---------|
| Sprint Duration | 1 Week |
| Team Members | 5 |
| Daily Commitment | 1.6 Hours/Day |
| Total Sprint Capacity | 40 Hours |
| Estimated Workload | 36 Hours |
| Buffer | 4 Hours |

---

## 3. Selected Epics & User Stories

| User Story ID | User Story | Scenarios | Story Points |
|---------------|------------|-----------|-------------|
| US-09 | Shopping Cart | 5 | 5 |
| US-10 | Register Sale | 5 | 5 |
| US-11 | Generate Receipt | 3 | 3 |
| US-12 | Sales History | 3 | 3 |
| **Total** | | **16** | **16 SP** |

---

### User Story US-09 – Shopping Cart

**Story Points:** 5

#### Acceptance Criteria

```gherkin
Feature: Shopping Cart

Scenario: Add product to cart
Given products exist
When the customer adds a product
Then the product appears in the cart

Scenario: Remove product from cart
Given a product exists in the cart
When the customer removes it
Then the cart is updated

Scenario: Update quantity
Given a product exists in the cart
When quantity changes
Then totals are recalculated

Scenario: Empty cart
Given the cart has products
When all products are removed
Then the cart becomes empty

Scenario: View cart contents
Given products exist in the cart
When the customer opens the cart
Then all selected products are displayed
```

---

### User Story US-10 – Register Sale

**Story Points:** 5

#### Acceptance Criteria

```gherkin
Feature: Register Sale

Scenario: Successful purchase
Given products exist in the cart
When checkout is completed
Then the sale is registered

Scenario: Insufficient stock
Given stock is insufficient
When checkout is attempted
Then the sale is rejected

Scenario: Calculate total amount
Given products exist in the cart
When checkout is initiated
Then the total amount is calculated

Scenario: Save sale record
Given checkout is completed
When the transaction is processed
Then the sale is stored

Scenario: Update inventory after sale
Given a sale was completed
When inventory is reviewed
Then stock is reduced automatically
```

---

### User Story US-11 – Generate Receipt

**Story Points:** 3

#### Acceptance Criteria

```gherkin
Feature: Receipt Generation

Scenario: Generate receipt
Given a sale was completed
When the transaction finishes
Then a receipt is generated

Scenario: Download receipt
Given a receipt exists
When the customer selects download
Then the receipt is downloaded

Scenario: Display receipt information
Given a receipt exists
When the customer views it
Then all transaction details are displayed
```

---

### User Story US-12 – Sales History

**Story Points:** 3

#### Acceptance Criteria

```gherkin
Feature: Sales History

Scenario: View sales history
Given sales records exist
When the administrator accesses history
Then all sales are displayed

Scenario: Filter sales by date
Given sales records exist
When a date range is selected
Then matching sales are displayed

Scenario: No sales records
Given no sales exist
When history is accessed
Then a message is displayed
```

---

## 4. Weekly Execution Roadmap

| Day | Activities |
|------|------------|
| Monday | Sprint Planning and cart design |
| Tuesday | Shopping cart implementation |
| Wednesday | Sales registration |
| Thursday | Receipt generation and history |
| Friday | Testing, review and retrospective |

---

## 5. Action Plan

| Activity | Responsible |
|------------|------------|
| Sales data model | Itzel Trujillo |
| Seed sales data | Vanessa Aponte |
| Sales queries | Paolette Calvo |
| Transaction integration | Daiana Dector |
| Sprint documentation and validation | Valentina Contreras |

---

## 6. Validation Strategy

### Functional Validation

- Verify shopping cart operations.
- Verify sales registration.
- Verify receipt generation.
- Verify sales history functionality.

### Technical Validation

- Transaction processing tests.
- Inventory update after sales testing.
- Database transaction validation.
- Integration testing between sales and inventory modules.

### Acceptance Validation

All 16 Gherkin scenarios must pass successfully before sprint closure.

---

## 7. Definition of Done

### Sprint Completion Checklist

- [ ] Shopping cart module operational
- [ ] Sales registration module operational
- [ ] Receipt generation operational
- [ ] Sales history module operational
- [ ] All acceptance criteria satisfied
- [ ] All 16 Gherkin scenarios executed successfully
- [ ] Integration tests completed successfully
- [ ] Documentation updated
- [ ] Code uploaded and merged into repository
- [ ] Sprint Review completed
- [ ] Sprint Retrospective completed
- [ ] Product Owner approval obtained
