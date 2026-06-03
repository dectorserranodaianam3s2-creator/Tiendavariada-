# Sprint Backlog – Sprint 1: Core Foundations & Product Administration

## Product Goal Reference

Develop a secure, centralized, and user-friendly inventory and sales management system for a retail store, streamlining product administration, inventory tracking, and customer transactions.

---

# 1. Sprint Goal

Establish the foundational system architecture and implement core product administration functionalities, including product registration, update, deletion, and visualization.

---

# 2. Sprint Parameters & Capacity Plan

| Parameter | Value |
|------------|---------|
| Sprint Duration | 5 Weeks |
| Team Members | 5 |
| Total Sprint Capacity | 160 Hours |
| Estimated Workload | 32 Hours |
| Buffer | 128 Hours |

---

# 3. Selected User Stories

## User Story US-01 – Register Product

### Story

As a Store Administrator, I want to register products in the system so that they can be available for inventory management and sales operations.

### Acceptance Criteria

```gherkin
Feature: Product Registration

Scenario: Successful product registration
Given valid product information
When the administrator submits the registration form
Then the product is stored successfully

Scenario: Missing required information
Given incomplete product information
When the administrator submits the registration form
Then the system displays a validation error

Scenario: Duplicate product code
Given a product code already exists
When the administrator registers a new product
Then the registration is rejected
```

### Tasks

| Task | Responsible | Duration (Hours) |
|---------|---------|---------|
| Design product structure | Itzel Trujillo | 2 |
| Create product seed data | Vanessa Aponte | 2 |
| Develop insert queries | Paolette Calvo | 3 |
| Integrate registration module | Daiana Dector | 2 |
| Validate functionality | Valentina Contreras | 1 |

---

## User Story US-02 – View Products

### Story

As a Store Administrator, I want to view all registered products so that I can monitor inventory information.

### Acceptance Criteria

```gherkin
Feature: Product Visualization

Scenario: Display products
Given products exist in the database
When the administrator accesses the catalog
Then all products are displayed

Scenario: Empty catalog
Given no products exist
When the administrator accesses the catalog
Then a message is displayed

Scenario: View product details
Given products exist
When the administrator selects a product
Then detailed information is displayed
```

### Tasks

| Task | Responsible | Duration (Hours) |
|---------|---------|---------|
| Design product view | Itzel Trujillo | 1 |
| Generate test data | Vanessa Aponte | 1 |
| Create retrieval queries | Paolette Calvo | 3 |
| Integrate visualization module | Daiana Dector | 2 |
| Validate functionality | Valentina Contreras | 1 |

---

## User Story US-03 – Update Product

### Story

As a Store Administrator, I want to update product information so that inventory records remain accurate.

### Acceptance Criteria

```gherkin
Feature: Product Update

Scenario: Successful update
Given a product exists
When the administrator modifies product information
Then changes are stored successfully

Scenario: Invalid data
Given invalid information
When the administrator updates the product
Then the system rejects the update

Scenario: Product not found
Given the product does not exist
When an update is attempted
Then an error message is displayed
```

### Tasks

| Task | Responsible | Duration (Hours) |
|---------|---------|---------|
| Design update process | Itzel Trujillo | 1 |
| Prepare update datasets | Vanessa Aponte | 1 |
| Develop update queries | Paolette Calvo | 3 |
| Integrate update module | Daiana Dector | 2 |
| Validate functionality | Valentina Contreras | 1 |

---

## User Story US-04 – Delete Product

### Story

As a Store Administrator, I want to remove products from the catalog so that obsolete products are no longer available.

### Acceptance Criteria

```gherkin
Feature: Product Deletion

Scenario: Successful deletion
Given a product exists
When the administrator deletes the product
Then the product is removed

Scenario: Product not found
Given the product does not exist
When deletion is attempted
Then an error message is displayed

Scenario: Deletion confirmation
Given a product exists
When deletion is requested
Then the system requests confirmation
```

### Tasks

| Task | Responsible | Duration (Hours) |
|---------|---------|---------|
| Design deletion workflow | Itzel Trujillo | 1 |
| Create testing records | Vanessa Aponte | 1 |
| Develop delete queries | Paolette Calvo | 3 |
| Integrate delete module | Daiana Dector | 2 |
| Validate functionality | Valentina Contreras | 1 |

---

# 4. Weekly Execution Roadmap

| Week | NoSQL Concept | Project Phase | Activity | Responsible | Deliverable |
|--------|--------|--------|--------|--------|--------|
| Week 1 | Rules & Tools Configuration | Setup | Install and configure VS Code, MongoDB Compass, Git, and initialize repository | Valentina Contreras | README.md |
| Week 2 | JSON/BSON Syntax | Discovery | Define project scope, requirements, business rules, and JSON structure | Entire Team | portfolio/me.json |
| Week 3 | Schema Design (Embedding vs Referencing) | Modeling | Design collections, relationships, and create Mermaid schema diagram | Itzel Trujillo | docs/schema.mmd |
| Week 4 | MongoDB Compass & Atlas | Integration | Configure database connection and create collections | Daiana Dector | scripts/01_create_collections.js |
| Week 5 | CRUD Create (insertOne, insertMany) | Seeding | Generate sample data, load seed data, and validate insertion queries | Vanessa Aponte & Paolette Calvo | data/seeds.json |

---

# 5. Action Plan

| Activity | Responsible | Estimated Hours |
|------------|------------|------------|
| Install and configure VS Code, MongoDB Compass, and Git | Valentina Contreras | 4 |
| Define project scope, requirements, and JSON structure | Entire Team | 6 |
| Design database schema and Mermaid diagram | Itzel Trujillo | 8 |
| Configure database connection and create collections | Daiana Dector | 6 |
| Generate and load seed data | Vanessa Aponte | 4 |
| Develop and validate insertion queries | Paolette Calvo | 4 |

**Total Estimated Workload: 32 Hours**

---

# 6. Validation Strategy

### Functional Validation

- Verify product registration.
- Verify product visualization.
- Verify product update.
- Verify product deletion.

### Technical Validation

- Query execution testing.
- Collection validation.
- Database connectivity testing.
- CRUD integration testing.

### Acceptance Validation

- All 12 Gherkin scenarios must pass successfully.
- Product administration workflows must be operational.
- Repository artifacts must be completed and uploaded.

---

# 7. Definition of Done (DoD)

## Sprint Completion Checklist


- [ ] VS Code installed and configured
- [ ] MongoDB Compass installed
- [ ] Git repository initialized
- [ ] README.md completed

- [ ] Project scope defined
- [ ] Requirements documented
- [ ] portfolio/me.json completed

- [ ] Database schema designed
- [ ] Mermaid diagram created
- [ ] docs/schema.mmd uploaded

- [ ] Database connection configured
- [ ] Collections created successfully
- [ ] scripts/01_create_collections.js uploaded
    
- [ ] Seed data generated
- [ ] Seed data loaded successfully
- [ ] data/seeds.json uploaded

- [ ] Product registration implemented
- [ ] Product visualization implemented
- [ ] Product update implemented
- [ ] Product deletion implemented
- [ ] All Gherkin scenarios executed successfully
- [ ] Integration testing completed

- [ ] Documentation updated
- [ ] Code uploaded to repository
- [ ] Sprint Review completed
- [ ] Sprint Retrospective completed
- [ ] Product Owner approval obtained
