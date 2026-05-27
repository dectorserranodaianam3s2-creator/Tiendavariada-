# 🛒 PRODUCT BACKLOG: ONLINE STORE (VARIETY SHOP)

---

# Product Goal

Develop a secure, responsive, and user-friendly online variety store that allows customers to browse different categories, purchase products easily, leave reviews, and manage their shopping experience from any device.

---

# Epics

- **Epic 1: User Access & Authentication**  
Covers user registration, login security, and account management for personalized shopping experiences.

- **Epic 2: Product Exploration & Catalog**  
Allows users to search, filter, and explore different products through categories, images, and detailed descriptions.

- **Epic 3: Shopping Cart & Payments**  
Manages cart operations, total payment calculation, and secure payment processing.

- **Epic 4: Administration & Inventory**  
Provides administrators with tools to add, edit, remove, and manage products and customer orders.

- **Epic 5: User Experience & Support**  
Improves accessibility, mobile responsiveness, customer support, favorites, and product reviews.

---

# User Stories & Acceptance Criteria

# Epic 1: User Access & Authentication

## US01 – Homepage Featured Products

### User Story:
As a user, I want to see featured products on the homepage so I can quickly know what the store sells.

### Expected Deliverable:
Functional homepage with featured products.

---

## US02 – Interface Design

### User Story:
As a user, I want an attractive and simple interface so I can navigate easily.

### Expected Deliverable:
Responsive and clean interface.

---

## US03 – User Registration

### User Story:
As a user, I want to create an account so I can save my information and purchases.

### Acceptance Criteria:

#### Scenario: Successful account creation

- Given the user is on the registration page  
- When they enter a valid email and password  
- Then the system must create the account successfully  
- And save the user information in the database  

### Expected Deliverable:
Registration form connected to database.

---

## US04 – Secure Login

### User Story:
As a user, I want to log into my account securely so I can access my profile.

### Acceptance Criteria:

#### Scenario: Successful login

- Given the user already has an account  
- When valid credentials are entered  
- Then the system must allow secure access to the profile  

### Expected Deliverable:
Login system with validation.

---

# Epic 2: Product Exploration & Catalog

## US05 – Product Search

### User Story:
As a user, I want to search products by name so I can find products quickly.

### Expected Deliverable:
Search bar connected to product database.

---

## US06 – Product Categories

### User Story:
As a user, I want to filter products by categories so I can browse easier.

### Acceptance Criteria:

#### Scenario: Filtering products

- Given the user selects a category  
- When the filter is applied  
- Then the system must display only products from that category  
- And no page errors should occur  

### Expected Deliverable:
Functional product filter system.

---

## US07 – Product Details

### User Story:
As a user, I want to see product details and prices so I can decide what to buy.

### Expected Deliverable:
Product detail page.

---

## US18 – Product Images

### User Story:
As a user, I want to see product images so I can better understand the product.

### Expected Deliverable:
Product image gallery.

---

## US22 – Variety Products Catalog

### User Story:
As a user, I want to explore a variety of products in a single online store so I can buy different items easily in the same place.

### Acceptance Criteria:

#### Scenario: Exploring multiple product categories

- Given the user enters the online store  
- When browsing through the catalog  
- Then the system must display multiple product categories correctly  
- And allow easy navigation between different product types  

### Expected Deliverable:
Product catalog with multiple categories and product variety.

---

# Epic 3: Shopping Cart & Payments

## US08 – Add Products to Cart

### User Story:
As a user, I want to add products to a shopping cart so I can buy several products at once.

### Acceptance Criteria:

#### Scenario: Adding products successfully

- Given the user selects a product  
- When the add-to-cart button is pressed  
- Then the product must appear in the shopping cart correctly  

### Expected Deliverable:
Functional shopping cart.

---

## US09 – Remove Products from Cart

### User Story:
As a user, I want to remove products from the cart so I can update my order.

### Expected Deliverable:
Cart update functionality.

---

## US10 – Total Payment Calculation

### User Story:
As a user, I want to see the total cost of my cart so I know how much I will pay.

### Acceptance Criteria:

#### Scenario: Automatic payment calculation

- Given products exist in the shopping cart  
- When quantities are updated  
- Then the system must calculate the total automatically  

### Expected Deliverable:
Automatic total calculation.

---

## US11 – Payment Methods

### User Story:
As a user, I want to choose a payment method so I can complete my purchase securely.

### Acceptance Criteria:

#### Scenario: Payment selection

- Given the user proceeds to checkout  
- When selecting a payment option  
- Then the platform must provide at least two payment methods  
- And confirm successful payment before processing the order  

### Expected Deliverable:
Payment selection system.

---

## US12 – Purchase Confirmation

### User Story:
As a user, I want to receive a confirmation after purchasing so I know my order was successful.

### Acceptance Criteria:

#### Scenario: Successful purchase confirmation

- Given the payment was completed successfully  
- When the order is processed  
- Then the system must display a confirmation message or email  

### Expected Deliverable:
Confirmation message/email.

---

# Epic 4: Administration & Inventory

## US13 – Add Products

### User Story:
As an admin, I want to add new products so I can keep the store updated.

### Expected Deliverable:
Product management panel.

---

## US14 – Edit Products

### User Story:
As an admin, I want to edit product information so I can correct or update details.

### Expected Deliverable:
Product editing module.

---

## US15 – Remove Products

### User Story:
As an admin, I want to remove unavailable products so customers only see available items.

### Expected Deliverable:
Delete product functionality.

---

## US20 – Order Management

### User Story:
As an admin, I want to view customer orders so I can manage deliveries efficiently.

### Expected Deliverable:
Orders dashboard.

---

# Epic 5: User Experience & Support

## US16 – Mobile Compatibility

### User Story:
As a user, I want the website to work on mobile devices so I can shop from my phone.

### Expected Deliverable:
Responsive mobile design.

---

## US17 – Customer Support

### User Story:
As a user, I want a contact section so I can ask questions or report problems.

### Acceptance Criteria:

#### Scenario: Sending support requests

- Given the user accesses the contact section  
- When a message is submitted  
- Then the system must send the question or report successfully  

### Expected Deliverable:
Contact form.

---

## US19 – Favorites System

### User Story:
As a user, I want to save favorite products so I can view them later.

### Expected Deliverable:
Favorites list system.

---

## US21 – Product Reviews

### User Story:
As a user, I want to leave product reviews so I can share my experience with other customers.

### Acceptance Criteria:

#### Scenario: Leaving a review

- Given the user purchased a product  
- When submitting a rating and comment  
- Then the review must be visible to other customers  

### Expected Deliverable:
Review and rating section.

---
