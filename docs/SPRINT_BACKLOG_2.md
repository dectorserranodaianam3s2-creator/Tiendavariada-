# Sprint Backlog – Sprint 2: Analytics & Data Intelligence

## Product Goal Reference

Develop analytical capabilities for the retail store management system by implementing aggregation pipelines, advanced reporting, and query optimization to support business decision-making.

---

# 1. Sprint Goal

Implement business analytics through MongoDB Aggregation Framework, generate advanced reports, optimize database performance using indexes, and prepare the final project presentation.

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

## User Story US-05 – Generate Sales Statistics

### Story

As a Store Administrator, I want to generate sales statistics so that I can analyze business performance.

### Acceptance Criteria

```gherkin
Feature: Sales Analytics

Scenario: Generate total sales report
Given sales records exist
When the administrator executes the analytics report
Then total sales are displayed correctly

Scenario: Count transactions
Given transaction data exists
When the aggregation pipeline runs
Then the total number of transactions is displayed

Scenario: No sales available
Given no sales records exist
When the report is generated
Then the system displays an empty result
```

### Tasks

| Task | Responsible | Duration (Hours) |
|---------|---------|---------|
| Design aggregation model | Itzel Trujillo | 2 |
| Prepare analytics dataset | Vanessa Aponte | 2 |
| Develop $match, $group and $count pipelines | Paolette Calvo | 4 |
| Integrate analytics module | Daiana Dector | 2 |
| Execute validation tests | Valentina Contreras | 1 |

**Total: 11 Hours**

---

## User Story US-06 – Generate Advanced Reports

### Story

As a Store Administrator, I want advanced reports so that I can make informed business decisions.

### Acceptance Criteria

```gherkin
Feature: Advanced Reporting

Scenario: Generate formatted report
Given sales data exists
When the administrator requests a report
Then the report is displayed correctly

Scenario: Sort report results
Given multiple records exist
When sorting is requested
Then records are displayed in the selected order

Scenario: Combine related data
Given products and sales exist
When the report is generated
Then related information is merged successfully
```

### Tasks

| Task | Responsible | Duration (Hours) |
|---------|---------|---------|
| Design reporting structure | Itzel Trujillo | 2 |
| Prepare reporting dataset | Vanessa Aponte | 2 |
| Develop $project, $sort, $limit and $lookup pipelines | Paolette Calvo | 3 |
| Integrate reporting module | Daiana Dector | 2 |
| Validate generated reports | Valentina Contreras | 2 |

**Total: 11 Hours**

---

## User Story US-07 – Optimize Query Performance

### Story

As a Store Administrator, I want optimized queries so that reports execute faster.

### Acceptance Criteria

```gherkin
Feature: Query Optimization

Scenario: Create index successfully
Given a collection exists
When an index is created
Then query execution time improves

Scenario: Compare performance
Given indexed and non-indexed queries
When performance is measured
Then execution metrics are displayed

Scenario: Explain execution plan
Given an optimized query
When explain() is executed
Then the execution plan is displayed
```

### Tasks

| Task | Responsible | Duration (Hours) |
|---------|---------|---------|
| Analyze query performance | Itzel Trujillo | 2 |
| Generate benchmark dataset | Vanessa Aponte | 2 |
| Create indexes and execute explain() | Paolette Calvo | 1 |
| Integrate optimization tests | Daiana Dector | 2 |
| Validate performance improvements | Valentina Contreras | 3 |

**Total: 10 Hours**

---

# 4. Weekly Execution Roadmap

| Week | NoSQL Concept | Project Phase | Activity | Responsible | Hours | Deliverable |
|--------|--------|--------|--------|--------|--------|--------|
| Week 1 | Aggregation Intro ($match, $group, $count) | Analytics | Create aggregation pipelines and statistical reports | Paolette Calvo & Itzel Trujillo | 8 | queries/agg_01_stats.mongodb |
| Week 2 | Advanced Pipelines ($project, $sort, $limit, $lookup) | Reporting | Develop advanced business reports | Paolette Calvo & Daiana Dector | 8 | queries/agg_02_reports.mongodb |
| Week 3 | Indexes & Performance (createIndex, explain()) | Optimization | Create indexes and evaluate performance improvements | Paolette Calvo & Vanessa Aponte | 6 | docs/performance_audit.md |
| Week 4 | Final System Integration | Demo Day | Integrate reporting modules and prepare project presentation | Entire Team | 6 | RELEASE v3.0 |
| Week 5 | Final Evaluation | Graduation | Repository review, documentation validation and project closure | Valentina Contreras | 4 | Final Repository |

**Total Weekly Hours: 32**

---

# 5. Action Plan

| Activity | Responsible | Estimated Hours |
|------------|------------|------------|
| Design aggregation pipelines and analytics model | Itzel Trujillo | 6 |
| Generate analytics and benchmark datasets | Vanessa Aponte | 6 |
| Develop aggregation, reporting and optimization queries | Paolette Calvo | 8 |
| Integrate analytics and reporting modules | Daiana Dector | 6 |
| Validation, sprint monitoring and final review | Valentina Contreras | 6 |

| | **Total Estimated Workload** | **32 Hours** |

---

# 6. Validation Strategy

### Functional Validation

- Verify aggregation pipelines.
- Verify statistical reports.
- Verify advanced reports.
- Verify query optimization.

### Technical Validation

- Aggregation Framework testing.
- Pipeline validation.
- Index validation.
- explain() execution testing.

### Acceptance Validation

- All Gherkin scenarios pass successfully.
- Reports generate correct results.
- Performance improvements are documented.
- Repository artifacts are uploaded.

---

# 7. Definition of Done (DoD)

## Sprint Completion Checklist

### Analytics

- [ ] Aggregation pipelines implemented
- [ ] Statistical reports generated
- [ ] queries/agg_01_stats.mongodb uploaded

### Reporting

- [ ] Advanced pipelines implemented
- [ ] Business reports generated
- [ ] queries/agg_02_reports.mongodb uploaded

### Optimization

- [ ] Indexes created successfully
- [ ] explain() analysis completed
- [ ] Performance audit completed
- [ ] docs/performance_audit.md uploaded

### Demo Day

- [ ] Modules integrated
- [ ] Presentation completed
- [ ] RELEASE v3.0 created

### Validation

- [ ] All Gherkin scenarios passed
- [ ] Functional testing completed
- [ ] Performance testing completed

### Documentation & Delivery

- [ ] Documentation updated
- [ ] Repository finalized
- [ ] Sprint Review completed
- [ ] Sprint Retrospective completed
- [ ] Product Owner approval obtained
