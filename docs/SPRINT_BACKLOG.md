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
| Team Members | 4 |
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
| Design catalog interface | Developer 1 |
| Create product list component | Developer 1 |
| Connect database query | Developer 2 |
| Display products dynamically | Developer 1 |
| Functional testing | Product Owner |

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
| Create product registration form | Developer 1 |
| Develop Create Product API | Developer 2 |
| Validate required fields | Developer 2 |
| Store product data in database | Developer 2 |
| Functional testing | Product Owner |

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
| Create update form | Developer 1 |
| Develop Update API | Developer 2 |
| Validate modifications | Developer 2 |
| Functional testing | Product Owner |

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
| Create delete functionality | Developer 2 |
| Add confirmation dialog | Developer 1 |
| Remove product from database | Developer 2 |
| Functional testing | Product Owner |

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

| Day | Activities |
|------|------------|
| Monday | Sprint Planning, repository setup, database configuration |
| Tuesday | Catalog interface development |
| Wednesday | Product registration module |
| Thursday | Update and delete product functionalities |
| Friday | Functional testing, bug fixes, Sprint Review and Retrospective |

---

## 5. Action Plan

| Day | Activity | Responsible | Expected Result |
|------|------------|-------------|----------------|
| Monday | Sprint Planning and task assignment | Scrum Team | Approved Sprint Backlog |
| Monday | Configure database and repository | Developers | Development environment ready |
| Tuesday | Develop catalog module | Developer 1 | Product catalog functional |
| Wednesday | Develop registration functionality | Developer 2 | Products can be added |
| Thursday | Implement update and delete operations | Developers | Full CRUD functionality completed |
| Friday | Execute Gherkin scenarios | Product Owner | Acceptance criteria validated |
| Friday | Correct defects and optimize system | Scrum Team | Stable sprint increment |

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
