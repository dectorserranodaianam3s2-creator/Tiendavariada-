# Store Management System – Software Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose

This document defines the Software Requirements Specification (SRS) for the Store Management System developed using MongoDB.

The purpose of this project is to provide a database-driven solution for managing products, inventory, sales analytics, reporting, validation processes, and data recovery mechanisms within a retail store environment.

### 1.2 Scope

The Store Management System allows administrators to:

- Register products
- View product information
- Update product records
- Delete products
- Generate sales statistics
- Create analytical reports
- Optimize database performance
- Validate product information
- Execute transactions safely
- Perform backup and recovery procedures

The system is intended as an educational NoSQL database project using MongoDB.

### 1.3 Definitions

| Term | Description |
|--------|--------|
| CRUD | Create, Read, Update, Delete |
| NoSQL | Non-relational database model |
| Aggregation Pipeline | MongoDB framework for data processing |
| Transaction | Atomic operation executed across multiple actions |
| Backup | Copy of database data |
| Recovery | Restoration of stored data |

---

# 2. Product Backlog Overview

## Epic 1: Product Management

- Register Product
- View Products
- Update Product
- Delete Product

## Epic 2: Analytics and Reporting

- Generate Sales Statistics
- Generate Advanced Reports
- Optimize Query Performance
- Analytics Integration

## Epic 3: Security and Reliability

- Product Validation
- Transaction Management
- Backup and Recovery
- Final Integration and Deployment

---

# 3. Software Requirements Specification

## 3.1 Functional Requirements

### FR-01 Product Registration

The system shall allow administrators to register new products.

### FR-02 Product Visualization

The system shall display stored products and their information.

### FR-03 Product Update

The system shall allow administrators to modify existing products.

### FR-04 Product Deletion

The system shall allow administrators to delete products.

### FR-05 Sales Statistics

The system shall generate statistical information using MongoDB Aggregation Framework.

### FR-06 Advanced Reporting

The system shall create reports using aggregation operators such as:

- `$match`
- `$group`
- `$project`
- `$sort`
- `$lookup`
- `$limit`

### FR-07 Query Optimization

The system shall improve query execution using indexes and `explain()` analysis.

### FR-08 Product Validation

The system shall validate required fields and data integrity before storage.

### FR-09 Transaction Management

The system shall support transactions to guarantee consistency during operations.

### FR-10 Backup and Recovery

The system shall support backup generation and data restoration.

### FR-11 Final Integration

The system shall integrate all modules into a single functional solution.

---

## 3.2 Non-Functional Requirements

### Performance

- Query execution shall complete within acceptable response times.
- Indexed queries shall perform faster than non-indexed queries.

### Reliability

- Backup and recovery mechanisms shall preserve data integrity.
- Transactions shall prevent inconsistent states.

### Security

- Input validation shall prevent invalid records.
- Database access shall be restricted to authorized administrators.

### Scalability

- MongoDB collections shall support future growth.

### Maintainability

- Queries shall be documented.
- Repository structure shall follow project standards.

### Availability

- Database services shall remain available during normal operation.

---

# 4. Database Requirements

## Main Collection: Products

### Fields

| Field | Type |
|---------|---------|
| _id | ObjectId |
| name | String |
| category | String |
| price | Decimal |
| stock | Integer |
| supplier | String |
| createdAt | Date |

---

## Main Collection: Sales

### Fields

| Field | Type |
|---------|---------|
| _id | ObjectId |
| productId | ObjectId |
| quantity | Integer |
| totalAmount | Decimal |
| saleDate | Date |

---

# 5. API Design

The system exposes MongoDB operations through scripts and queries.

## CRUD Operations

### Create Product

```javascript
db.products.insertOne({...})
```

### Read Products

```javascript
db.products.find()
```

### Update Product

```javascript
db.products.updateOne()
```

### Delete Product

```javascript
db.products.deleteOne()
```

---

## Aggregation Operations

### Sales Statistics

```javascript
db.sales.aggregate([
  {
    $group: {
      _id: null,
      totalSales: { $sum: "$totalAmount" }
    }
  }
])
```

### Advanced Reporting

```javascript
db.sales.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "productId",
      foreignField: "_id",
      as: "productInfo"
    }
  },
  {
    $project: {
      totalAmount: 1,
      saleDate: 1
    }
  },
  {
    $sort: {
      totalAmount: -1
    }
  }
])
```

---

# 6. System Architecture

## Database Layer

### MongoDB

Responsibilities:

- Data storage
- CRUD operations
- Aggregations
- Transactions
- Index management
- Backup and recovery

---

## Business Logic Layer

### MongoDB Shell Scripts (mongosh)

Responsibilities:

- Product management
- Data validation
- Report generation
- Performance optimization
- Transaction execution

---

## Presentation Layer

### MongoDB Compass / MongoDB Shell

Responsibilities:

- Query execution
- Data visualization
- Administrative operations
- Report review

---

# 7. Technologies

## Database

- MongoDB

## Development Tools

- MongoDB Compass
- MongoDB Shell (mongosh)

## Version Control

- Git
- GitHub

## Testing

- Functional Testing
- Validation Testing
- Transaction Testing
- Performance Testing

## Documentation

- Markdown (.md)

---

# 8. Validation Strategy

## Functional Testing

- CRUD validation
- Aggregation validation
- Reporting validation
- Backup validation

## Technical Testing

- Query execution tests
- Index performance tests
- Transaction tests
- Recovery tests

## Acceptance Testing

- All Sprint Acceptance Criteria passed
- All Gherkin Scenarios completed
- All deliverables uploaded to GitHub

---

# 9. Team Structure

| Team Member | Role |
|-------------|------|
| Valentina Contreras | Scrum Master |
| Daiana Dector | Integration Specialist |
| Paolette Calvo | Query Developer |
| Vanessa Aponte | Data Seeder |
| Itzel Trujillo | Data Modeler |

---

# 10. Traceability Matrix

| Sprint | User Stories | Related Requirements |
|---------|---------|---------|
| Sprint 1 | US-01 to US-04 | FR-01, FR-02, FR-03, FR-04 |
| Sprint 2 | US-05 to US-08 | FR-05, FR-06, FR-07 |
| Sprint 3 | US-09 to US-12 | FR-08, FR-09, FR-10, FR-11 |

---

# 11. Conclusion

The Store Management System provides a complete MongoDB-based solution for product management, analytics, reporting, validation, transactions, and data recovery.

The project follows Scrum practices through three development sprints and demonstrates the implementation of advanced NoSQL database concepts using MongoDB.

The system has been designed to be scalable, reliable, maintainable, and aligned with modern database engineering practices.
