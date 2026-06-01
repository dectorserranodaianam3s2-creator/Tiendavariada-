# Sprint Backlog – Sprint 1: Product Catalog Management

## Product Goal Reference

Develop a digital platform for Tienda Variada that allows administrators to manage products efficiently and customers to browse available products easily.

---

## 1. Sprint Goal

Implement the product catalog module, allowing administrators to register, update, and delete products while enabling customers to view available items.

---

## 2. Sprint Parameters & Capacity Plan

| Parameter | Value |
|------------|---------|
| Sprint Duration | 1 Week |
| Team Members | 5 |
| Daily Commitment | 4 Hours/Member/Day |
| Total Sprint Capacity | 80 Hours |
| Estimated Workload | 72 Hours |
| Buffer | 8 Hours |

---

## 3. Selected Epics & User Stories

### Epic 1.1: Product Management

## Story Point Estimation

| User Story ID | User Story | Gherkin Scenarios | Story Points |
|---------------|------------|------------------|-------------|
| US-01 | View Product Catalog | 2 | 3 |
| US-02 | Register Product | 2 | 5 |
| US-03 | Update Product | 1 | 3 |
| US-04 | Delete Product | 1 | 3 |
| **Total** |  | **6 Scenarios** | **14 SP** |

---

### User Story US-01 – View Product Catalog

**As a customer, I want to view available products so that I can browse items before purchasing.**

**Story Points:** 3

#### Tasks

| Task | Responsible |
|---------|-------------|
| Design catalog interface | Paolette Calvo |
| Create product list component | Paolette Calvo |
| Connect database query | Daiana Dector|
| Display products dynamically | Paolette Calvo |
| Functional testing |Valentina Contreras|

#### Acceptance Criteria

```gherkin
Feature: Product Catalog

Scenario: View available products
Given products exist in the database
When the customer enters the catalog page
Then the system displays all available products

Scenario: Empty catalog
Given there are no products registered
When the customer enters the catalog page
Then the system displays a message indicating that no products are available
```

### User Story US-02 – Register Product

**As an administrator, I want to add products to the catalog so that customers can purchase them.**

**Story Points:** 5

#### Tasks

| Task | Responsible |
|---------|-------------|
| Create product registration form | Paolette Calvo|
| Develop Create Product API | Daiana Dector |
| Validate required fields | Daiana Dector|
| Store product data in database | Daiana Dector |
| Functional testing | Valentina Contreras|

#### Acceptance Criteria

```gherkin
Feature: Product Registration

Scenario: Successful product registration
Given the administrator is on the product registration page
When valid product information is entered
And the save button is pressed
Then the product is stored in the database
And appears in the catalog

Scenario: Missing required fields
Given the administrator is on the registration page
When required information is missing
And the save button is pressed
Then the system displays validation errors
```

### User Story US-03 – Update Product

**As an administrator, I want to update product information so that the catalog remains accurate.**

**Story Points:** 3

#### Tasks

| Task | Responsible |
|---------|-------------|
| Create update form | Paolette Calvo|
| Develop Update API | Daiana Dector|
| Validate modifications | Daiana Dector |
| Functional testing | Valentina Contreras|

#### Acceptance Criteria

```gherkin
Feature: Product Update

Scenario: Update product information
Given a product exists in the catalog
When the administrator modifies its information
And saves the changes
Then the system updates the product successfully
```

### User Story US-04 – Delete Product

**As an administrator, I want to remove products so that unavailable items are not displayed.**

**Story Points:** 3

#### Tasks

| Task | Responsible |
|---------|-------------|
| Create delete functionality | Daiana Dector |
| Add confirmation dialog | Paolette calvo|
| Remove product from database | Daiana Dector |
| Functional testing | Valentina Contreras|

#### Acceptance Criteria

```gherkin
Feature: Product Deletion

Scenario: Delete a product
Given a product exists in the catalog
When the administrator selects delete
And confirms the action
Then the product is removed from the catalog
```

---

## 4. Weekly Execution Roadmap

| Hours | Activities |
|------|------------|
| 1 hour | Sprint Planning, repository setup, database configuration |
| 2 hours | Catalog interface development |
| 2 hours | Product registration module |
| 2 hours | Update and delete product functionalities |
| 1 hour| Functional testing, bug fixes, Sprint Review and Retrospective |

---

## 5. Action Plan

| Day | Activity | Responsible | Expected Result |
|------|------------|-------------|----------------|
| 1 hour| Sprint Planning and task assignment | Scrum Team | Approved Sprint Backlog |
| 1 hour | Configure database and repository | Developers | Development environment ready |
| 2 hours | Develop catalog module | Developer 1 | Product catalog functional |
| 2 hours | Develop registration functionality | Developer 2 | Products can be added |
| 2 hours | Implement update and delete operations | Developers | Full CRUD functionality completed |
| 1 hour | Execute Gherkin scenarios | Product Owner | Acceptance criteria validated |
| 1 hour| Correct defects and optimize system | Scrum Team | Stable sprint increment |

---

## 6. Validation Strategy

### Functional Validation

- Verify product listing.
- Verify product registration.
- Verify product update.
- Verify product deletion.

### Technical Validation

- Database operations testing.
- API endpoint testing.
- Frontend-backend integration testing.

### Acceptance Validation

All Gherkin scenarios must pass successfully before sprint closure.

---

## 7. Definition of Done

- Code uploaded to repository.
- CRUD functionalities completed.
- Acceptance criteria satisfied.
- Gherkin scenarios executed successfully.
- No critical defects.
- Frontend integrated with backend.
- Product Owner approval obtained.
