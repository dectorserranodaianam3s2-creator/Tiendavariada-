Sprint Backlog – Sprint 3: Security, Reliability & Final Delivery

Product Goal Reference

Ensure the retail store management system is secure, reliable, and production-ready through validation mechanisms, transaction management, backup procedures, and final project integration.

---

1. Sprint Goal

Implement security controls, transaction management, backup and recovery procedures, and complete the final integration and delivery of the retail store management system.

---

2. Sprint Parameters & Capacity Plan

Parameter| Value
Sprint Duration| 5 Weeks
Team Members| 5
Total Sprint Capacity| 160 Hours
Estimated Workload| 32 Hours
Buffer| 128 Hours

---

3. Selected User Stories

User Story US-08 – Validate Product Information

Story

As a Store Administrator, I want product information to be validated so that incorrect data cannot be stored in the system.

Acceptance Criteria

Feature: Product Validation

Scenario: Valid information submitted
Given valid product data
When the administrator saves the product
Then the information is stored successfully

Scenario: Missing required field
Given incomplete product information
When the administrator submits the form
Then a validation error is displayed

Scenario: Invalid data format
Given incorrect product data
When the administrator saves the product
Then the operation is rejected

Tasks

Task| Responsible| Duration (Hours)
Design validation rules| Itzel Trujillo| 2
Prepare validation datasets| Vanessa Aponte| 2
Implement validation queries| Paolette Calvo| 4
Integrate validation module| Daiana Dector| 2
Execute validation tests| Valentina Contreras| 1

Total: 11 Hours

---

User Story US-09 – Manage Transactions

Story

As a Store Administrator, I want transactions to be executed safely so that inventory and sales records remain consistent.

Acceptance Criteria

Feature: Transaction Management

Scenario: Successful transaction
Given valid transaction data
When the transaction executes
Then all operations are completed successfully

Scenario: Transaction failure
Given an unexpected error occurs
When the transaction executes
Then all changes are rolled back

Scenario: Verify transaction consistency
Given multiple operations occur
When the transaction finishes
Then data remains consistent

Tasks

Task| Responsible| Duration (Hours)
Design transaction workflow| Itzel Trujillo| 2
Create transaction datasets| Vanessa Aponte| 2
Develop transaction scripts| Paolette Calvo| 3
Integrate transaction module| Daiana Dector| 2
Validate transaction execution| Valentina Contreras| 2

Total: 11 Hours

---

User Story US-10 – Backup and Recovery

Story

As a Store Administrator, I want backup and recovery procedures so that business information is protected.

Acceptance Criteria

Feature: Backup and Recovery

Scenario: Create backup
Given the database is operational
When a backup is executed
Then data is stored successfully

Scenario: Restore backup
Given a backup exists
When recovery is requested
Then data is restored successfully

Scenario: Verify backup integrity
Given a backup file exists
When validation is executed
Then backup integrity is confirmed

Tasks

Task| Responsible| Duration (Hours)
Design backup strategy| Itzel Trujillo| 2
Generate backup datasets| Vanessa Aponte| 2
Implement backup and restore scripts| Paolette Calvo| 1
Integrate backup procedures| Daiana Dector| 2
Validate backup recovery| Valentina Contreras| 3

Total: 10 Hours

---

4. Weekly Execution Roadmap

Week| NoSQL Concept| Project Phase| Activity| Responsible| Hours| Deliverable
Week 1| Validation Rules| Security| Implement validation mechanisms and error handling| Paolette Calvo & Itzel Trujillo| 8| scripts/validation_rules.js
Week 2| Transactions| Reliability| Develop transaction management workflows| Paolette Calvo & Daiana Dector| 8| scripts/transactions.js
Week 3| Backup & Recovery| Protection| Create backup and restore procedures| Paolette Calvo & Vanessa Aponte| 6| docs/backup_recovery.md
Week 4| Final Integration| Integration| Integrate all modules and perform final testing| Entire Team| 6| RELEASE_v4.0.md
Week 5| Project Delivery| Closure| Final repository review and project delivery| Valentina Contreras| 4| FINAL_DELIVERY.md

Total Weekly Hours: 32

---

5. Action Plan

Activity| Responsible| Estimated Hours
Design validation and security rules| Itzel Trujillo| 6
Generate validation and backup datasets| Vanessa Aponte| 6
Develop validation, transaction, and backup scripts| Paolette Calvo| 8
Integrate modules and deployment preparation| Daiana Dector| 6
Validation, sprint monitoring, and final review| Valentina Contreras| 6

| | Total Estimated Workload | 32 Hours |

---

6. Validation Strategy

Functional Validation

- Verify validation mechanisms.
- Verify transaction execution.
- Verify backup generation.
- Verify backup recovery.

Technical Validation

- Validation rule testing.
- Transaction testing.
- Recovery testing.
- Integration testing.

Acceptance Validation

- All Gherkin scenarios pass successfully.
- Recovery procedures function correctly.
- Final system integration completed.
- Repository artifacts uploaded.

---

7. Definition of Done (DoD)

Sprint Completion Checklist

Security

- [ ] Validation rules implemented
- [ ] Validation tests completed
- [ ] scripts/validation_rules.js uploaded

- [ ] Transaction workflows implemented
- [ ] Rollback tests completed
- [ ] scripts/transactions.js uploaded

- [ ] Backup procedures implemented
- [ ] Recovery procedures validated
- [ ] docs/backup_recovery.md uploaded

- [ ] All modules integrated
- [ ] Final testing completed
- [ ] RELEASE_v4.0.md created

- [ ] All Gherkin scenarios passed
- [ ] Functional testing completed
- [ ] Integration testing completed

- [ ] Documentation updated
- [ ] Repository finalized
- [ ] Sprint Review completed
- [ ] Sprint Retrospective completed
- [ ] Product Owner approval obtained


