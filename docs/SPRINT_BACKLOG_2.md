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
| Estimated Workload | 150 Hours |
| Buffer | 10 Hours |

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
| Design aggregation model | Itzel Trujillo | 8
|
| Prepare analytics dataset | Vanessa Aponte | 8
|
| Develop $match, $group and $count pipelines | Paolette Calvo | 12|
| Integrate analytics module | Daiana Dector | 8 |
| Execute validation tests | Valentina Contreras | 4 |


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
| Design reporting structure | Itzel Trujillo | 8 |
| Prepare reporting dataset | Vanessa Aponte | 8 |
| Develop $project, $sort, $limit and $lookup pipelines | Paolette Calvo | 12 |
| Integrate reporting module | Daiana Dector | 8 |
| Validate generated reports | Valentina Contreras | 4 |

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
| Analyze query performance | Itzel Trujillo | 8 |
| Generate benchmark dataset | Vanessa Aponte | 8 |
| Create indexes and execute explain() | Paolette Calvo | 12 |
| Integrate optimization tests | Daiana Dector | 8 |
| Validate performance improvements | Valentina Contreras | 4 |



---

## User Story US-08 – Final Analytics Integration

### Story

As a Product Owner, I want all analytics components integrated so that the final solution works as a complete business intelligence module.

### Acceptance Criteria

```gherkin
Feature: Analytics Integration

Scenario: Complete integration
Given all analytics modules are finished
When integration is executed
Then all modules work together successfully

Scenario: Generate final demo
Given all reports are available
When the demo is prepared
Then stakeholders can review the complete solution
```

### Tasks

| Task | Responsible | Duration (Hours) |
|---------|---------|---------|
| Final analytics integration | Daiana Dector | 8|
| System validation testing | Valentina Contreras | 8 |
| Documentation updates | Entire Team | 6 |
| Demo preparation | Entire Team | 8 |


---

# 4. Weekly Execution Roadmap

| Week | NoSQL Concept | Project Phase | Activity | Responsible | Hours | Deliverable |
|--------|--------|--------|--------|--------|--------|--------|
| Week 1 | Aggregation Framework ($match, $group, $count) | Analytics | Develop sales analytics pipelines and statistics reports | Paolette Calvo & Itzel Trujillo | 30 | queries/agg_01_stats.mongodb |
| Week 2 | Advanced Pipelines ($project, $sort, $limit, $lookup) | Reporting | Create advanced reporting functionality | Paolette Calvo & Daiana Dector | 30 | queries/agg_02_reports.mongodb |
| Week 3 | Indexes & Performance | Optimization | Implement indexes and performance evaluation | Paolette Calvo & Vanessa Aponte | 30 | docs/performance_audit.md |
| Week 4 | Final Integration & Testing | Demo Day | Integrate modules and perform testing | Entire Team | 30 | RELEASE_v3.0.md |
| Week 5 | Documentation & Evaluation | Graduation | Final repository review and presentation | Entire Team | 30 | FINAL_REPOSITORY.md |

**Total Weekly Hours: 150**

---

# 5. Action Plan

| Activity | Responsible | Estimated Hours |
|------------|------------|------------|
| Design analytics models, reporting structures, and validation reviews | Itzel Trujillo | 28 |
| Generate datasets, benchmark data, and result verification | Vanessa Aponte | 28 |
| Develop aggregation, reporting, optimization, and integration queries | Paolette Calvo | 40 |
| Integrate analytics modules and support final deployment | Daiana Dector | 32 |
| Functional validation, sprint monitoring, and acceptance testing | Valentina Contreras | 22 |

| | **Total Estimated Workload** | **150 Hours** |

---

# 6. Validation Strategy

## Functional Validation

- Verify aggregation pipelines.
- Verify advanced reports.
- Verify analytics integration.
- Verify performance optimization.

## Technical Validation

- Aggregation Framework testing.
- Pipeline validation.
- Index validation.
- explain() execution testing.
- Integration testing.

## Acceptance Validation

- All Gherkin scenarios pass successfully.
- Reports generate correct results.
- Performance improvements are documented.
- Demo presentation is completed.
- Repository artifacts are uploaded.

---

# 7. Definition of Done (DoD)

- [x] Aggregation pipelines implemented
- [x] Sales statistics generated
- [x] queries/agg_01_stats.mongodb uploaded
      
- [x] Advanced reporting pipelines implemented
- [x] Reports generated successfully
- [x] queries/agg_02_reports.mongodb uploaded

- [x] Indexes created successfully
- [x] explain() analysis completed
- [x] Performance audit completed
- [x] docs/performance_audit.md uploaded

- [x] Modules integrated successfully
- [x] End-to-end testing completed
- [x] RELEASE_v3.0.md created

- [x] All Gherkin scenarios passed
- [x] Functional testing completed
- [x] Performance testing completed
- [x] Integration testing completed
      
- [x] Documentation updated
- [x] Repository finalized
- [x] Sprint Review completed
- [x] Sprint Retrospective completed
- [x] Product Owner approval obtained
