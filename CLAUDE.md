# CLAUDE.md — ASTRA RESTAURANT

## Project Mission

Build a beautiful, production-quality food ordering web application for **Astra Restaurant** in Dzaleka Refugee Camp, Malawi.

This is a real restaurant ordering experience, not a demonstration website.

The most important goals are:

1. Make the food look extremely appetizing.
2. Make ordering extremely simple.
3. Make the brand memorable.
4. Encourage customers to order.
5. Clearly communicate pickup, delivery, ordering time and advance payment.
6. Make the application work exceptionally well on mobile phones.

---

## Design Philosophy

Think like a combination of:

* A professional restaurant designer
* A mobile UX designer
* A conversion-focused product designer
* A modern African food brand

Do not create a generic template.

The application should have its own Astra identity.

Use:

* Orange
* Purple
* White
* Gold
* Apple Green

Do not overuse the colors simultaneously. White should provide breathing room, while orange and purple should create strong brand recognition. Gold and green should be accents.

Use beautiful typography, rounded cards, tasteful shadows, subtle animations and strong spacing.

---

## UX Principles

The customer should be able to understand the application immediately.

Prioritize:

**Food → Price → Add → Cart → Delivery/Pickup → Time → Payment → Confirmation**

Never make customers search for the main ordering button.

The primary CTA should always be obvious.

Use language that is friendly, confident and simple.

Avoid technical language.

---

## Food Photography

Food imagery is extremely important.

Use high-quality, appetizing images that match the actual menu item.

Never use an obviously unrelated image simply to fill space.

Structure the code so real Astra Restaurant photographs can easily replace temporary images later.

---

## Ordering Rules

Astra customers should order at least **2 hours in advance**.

The interface must enforce this rule when selecting a time.

Dzaleka delivery should initially cost:

**MWK 2,000**

Keep the delivery fee configurable.

Customers should be encouraged to pay in advance.

Never claim that a payment has been successfully received unless there is a real payment confirmation.

---

## Important Restaurant Data

Restaurant:
Astra Restaurant

Location:
New Katudza, Dzaleka Refugee Camp, Dowa, Malawi

WhatsApp/Phone:
+265 997 73 88 06
+265 994 85 3121

Delivery:
Within Dzaleka

Delivery fee:
MWK 2,000 initially

---

## Menu Data

Keep menu information in a structured data source rather than hard-coding it repeatedly throughout the interface.

Menu:

Chicken & Rice — MWK 6,500
Nsima with Chicken — MWK 5,500
Nsima with Beef — MWK 6,000
Fried Rice with Chicken — MWK 7,500
Sausages & Chips — MWK 5,500
Egusi — MWK 9,500
Spaghetti Meal — MWK 4,500
Special Mixed Plate — MWK 7,500
Special Salad — MWK 3,500
Tea — MWK 1,000

Extras:

Extra Chicken — MWK 2,500
Extra Beef — MWK 3,000
Extra Nsima — MWK 1,000
Salad — MWK 1,500

---

## Development Rules

Before writing large amounts of code:

1. Understand the complete requirements.
2. Create a clean project structure.
3. Build reusable components.
4. Keep business data separate from UI components.
5. Make the application responsive from the beginning.
6. Test every major customer flow.
7. Do not create unnecessary complexity.

Do not duplicate information across multiple files when a reusable data structure can be used.

Do not create fake functionality and present it as real functionality.

If a feature requires an external service that is not yet connected, create a clean placeholder architecture for it.

---

## Checkout

Checkout must include:

* Customer name
* Phone/WhatsApp
* Pickup or delivery
* Delivery location when delivery is selected
* Date
* Time
* Payment method
* Order summary
* Delivery fee
* Final total

Prevent checkout if required information is missing.

Prevent invalid ordering times.

---

## Payment

Supported payment methods:

* Airtel Money
* TNM Mpamba

If cash on delivery is included, treat it as a configurable option because Astra's preferred model is advance payment.

Payment instructions must be easy to understand.

Design payment integration so a real payment provider can be connected later.

---

## Order Status

Use clear states:

Received
Payment Verification
Preparing
Ready
Out for Delivery
Completed

Do not expose complicated technical states to customers.

---

## Mobile First

Design for a customer holding a phone.

Buttons should be easy to tap.

The cart should be easy to access.

Checkout should not require unnecessary scrolling.

Use sticky or easily accessible ordering controls where appropriate.

---

## Quality Standard

Before considering the application complete, check:

* Is the homepage visually attractive?
* Are the food images prominent?
* Can a customer find the menu immediately?
* Can a customer order in less than a few minutes?
* Is the total price always clear?
* Is the delivery fee clear?
* Is the 2-hour rule enforced?
* Is advance payment clearly communicated?
* Does the application work on mobile?
* Are buttons and forms easy to use?
* Are empty/error/loading states handled?
* Does the application feel like Astra Restaurant rather than a generic template?

Build with polish.

Do not stop at "it works."

The final result should feel like something a real restaurant could confidently show customers.
