# Sprint Backlog – Sprint 2: Inventory & Search Management

## Product Goal Reference

Develop inventory control and search functionalities that allow efficient product management and improve the customer shopping experience.

---

## 1. Sprint Goal

Implement inventory management, product search, low-stock alerts, and detailed product information display.

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

### Epic 2.1: Inventory & Search Management

| User Story ID | User Story | Scenarios | Story Points |
|---------------|------------|-----------|-------------|
| US-05 | Search Products | 3 | 3 |
| US-06 | Manage Inventory | 5 | 5 |
| US-07 | Low Stock Alerts | 3 | 3 |
| US-08 | View Product Details | 3 | 3 |
| **Total** | | **14** | **14 SP** |

---

### User Story US-05 – Search Products

**Story Points:** 3

#### Tasks

| Task | Responsible |
|---------|-------------|
| Design search interface | Valentina Contreras |
| Create search queries | Paolette Calvo |
| Integration testing | Daiana Dector |

#### Acceptance Criteria

```gherkin
Feature: Product Search

Scenario: Search by name
Given products exist in the catalog
When the customer enters a product name
Then matching products are displayed

Scenario: No results found
Given products exist in the catalog
When the customer searches for a nonexistent product
Then the system displays "No products found"

Scenario: Partial search
Given products exist in the catalog
When the customer enters part of a product name
Then related products are displayed
```

---

### User Story US-06 – Manage Inventory

**Story Points:** 5

#### Tasks

| Task | Responsible |
|---------|-------------|
| Design inventory structure | Itzel Trujillo |
| Create inventory records | Vanessa Aponte |
| Develop inventory queries | Paolette Calvo |
| Integrate inventory module | Daiana Dector |
| Functional testing | Valentina Contreras |

#### Acceptance Criteria

```gherkin
Feature: Inventory Management

Scenario: Increase stock
Given a product exists
When stock is increased
Then inventory is updated

Scenario: Decrease stock
Given a product exists
When stock is reduced
Then inventory is updated

Scenario: Prevent negative stock
Given a product exists
When stock becomes negative
Then the operation is rejected

Scenario: Save inventory changes
Given inventory modifications were made
When changes are saved
Then data is stored successfully

Scenario: Display current stock
Given products exist
When inventory is viewed
Then current quantities are displayed
```

---

### User Story US-07 – Low Stock Alerts

**Story Points:** 3

#### Acceptance Criteria

```gherkin
Feature: Low Stock Alerts

Scenario: Low stock warning
Given stock is below minimum level
When inventory is reviewed
Then a warning is displayed

Scenario: Normal stock
Given stock is above minimum level
When inventory is reviewed
Then no warning is displayed

Scenario: Critical stock
Given stock reaches zero
When inventory is reviewed
Then a critical alert is displayed
```

---

### User Story US-08 – View Product Details

**Story Points:** 3

#### Acceptance Criteria

```gherkin
Feature: Product Details

Scenario: View details
Given a product exists
When the customer selects the product
Then detailed information is displayed

Scenario: Product unavailable
Given the product does not exist
When the customer requests details
Then an error message is displayed

Scenario: View stock availability
Given a product exists
When details are displayed
Then stock availability is shown
```

---

## 4. Weekly Execution Roadmap

| Day | Activities |
|------|------------|
| Monday | Sprint Planning and inventory design |
| Tuesday | Search functionality development |
| Wednesday | Inventory management implementation |
| Thursday | Alerts and product details |
| Friday | Testing, bug fixing and review |

---

## 5. Action Plan

| Activity | Responsible |
|------------|------------|
| Database modeling | Itzel Trujillo |
| Data seeding | Vanessa Aponte |
| Query development | Paolette Calvo |
| Module integration | Daiana Dector |
| Validation and documentation | Valentina Contreras |

---

## 6. Validation Strategy

### Functional Validation

- Verify product search functionality.
- Verify inventory updates correctly.
- Verify low stock alerts are generated.
- Verify product details are displayed correctly.

### Technical Validation

- Query execution testing.
- Inventory database validation.
- Integration testing between inventory and catalog modules.
- Data consistency testing.

### Acceptance Validation

All 14 Gherkin scenarios must pass successfully before sprint closure.

---

## 7. Definition of Done

- Product search module operational.
- Inventory management module operational.
- Low stock alerts operational.
- Product details view operational.
- All acceptance criteria satisfied.
- All 14 Gherkin scenarios executed successfully.
- Integration tests completed successfully.
- Documentation updated.
- Code uploaded and merged into the repository.
- Sprint Review approved by the team.
