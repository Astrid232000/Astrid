# ASTRA RESTAURANT — APPLICATION REQUIREMENTS

## 1. Project Overview

Build a modern, attractive food-ordering web application for **Astra Restaurant**, located in New Katudza, Dzaleka Refugee Camp, Dowa, Malawi.

The application should allow customers to:

* Browse the Astra Restaurant menu
* View attractive food images
* Select meals and quantities
* Add extras
* Review their order
* Choose **Pickup** or **Delivery**
* Enter their delivery location
* See the delivery fee
* Choose a payment method
* Place and confirm their order
* Receive clear ordering instructions

The application should be designed primarily for **mobile users**, since many customers will access it from their phones.

---

## 2. Brand Identity

### Restaurant Name

**Astra Restaurant**

### Brand Colors

Use the Astra Kitchen brand palette:

* Orange — primary energetic/action color
* Purple — premium brand accent
* White — clean background
* Gold — premium/highlight accent
* Apple Green — freshness/food accent

The colors should be used tastefully. The interface must remain clean and professional rather than using all colors heavily at once.

### Design Direction

The application should feel:

* Modern
* Warm
* Premium but affordable
* Appetizing
* Friendly
* African-inspired without becoming visually cluttered
* Easy for first-time smartphone users
* Strongly focused on ordering

Use large food photography, rounded cards, clear typography, attractive buttons, subtle animations, and strong visual hierarchy.

---

## 3. Homepage

The homepage should immediately communicate what Astra Restaurant offers.

Include:

### Hero Section

* Astra Restaurant logo/name
* Attractive hero food image
* Short statement such as:
  **"Fresh meals. Made with care. Delivered with love."**
* Primary CTA:
  **Order Now**
* Secondary CTA:
  **View Menu**

### Quick Information

Display:

* 📍 Dzaleka Refugee Camp — New Katudza
* 🚚 Delivery available
* ⏰ Order at least 2 hours ahead
* 💳 Pay in advance
* 📱 WhatsApp ordering support

### Featured Meals

Show attractive cards for popular meals with:

* Food image
* Name
* Short description
* Price
* Add button

---

## 4. Menu

Organize the menu into clear categories.

### Main Meals

**Chicken & Rice — MWK 6,500**

* Jollof or Fried Rice
* Includes chicken, rice and vegetables

**Nsima with Chicken — MWK 5,500**

* Nsima, chicken, greens and sauce

**Nsima with Beef — MWK 6,000**

**Fried Rice with Chicken — MWK 7,500**

### Fast Meals

**Sausages & Chips — MWK 5,500**

### Special Dishes

**Egusi — MWK 9,500**

* Served with preferred side

**Spaghetti Meal — MWK 4,500**

**Special Mixed Plate — MWK 7,500**

* Rice, chicken, salad and sauce

### Salads

**Special Salad — MWK 3,500**

### Drinks

**Tea — MWK 1,000**

### Extras

* Extra Chicken — MWK 2,500
* Extra Beef — MWK 3,000
* Extra Nsima — MWK 1,000
* Salad — MWK 1,500

Each item should have:

* Image
* Name
* Description
* Price
* Quantity selector
* Add to Cart button

---

## 5. Food Images

Food images are an important part of the application.

Use high-quality, appetizing food photography that accurately represents the type of meal being sold.

Do not use random unrelated food images.

If actual Astra Restaurant food photographs are provided later, replace placeholder images with the restaurant's real photographs.

---

## 6. Cart

The cart should show:

* Selected meals
* Quantity
* Individual prices
* Extras
* Subtotal
* Delivery fee
* Total amount

Customers must be able to:

* Increase quantity
* Decrease quantity
* Remove items
* Continue shopping
* Proceed to checkout

---

## 7. Ordering Rules

The application must enforce Astra Restaurant's ordering policy.

### Minimum Ordering Time

Customers should place orders **at least 2 hours before their desired pickup/delivery time**.

The date/time selector should prevent customers from selecting a time that is less than 2 hours from the current time.

If an order is being placed too late, clearly explain:

**"Please choose a time at least 2 hours from now so we can prepare your meal fresh."**

Customers can also order one day in advance.

---

## 8. Pickup or Delivery

At checkout, customers must choose:

### Pickup

Customer collects the food from Astra Restaurant.

Display:

**Pickup — No delivery fee**

### Delivery

Customer provides:

* Name
* Phone/WhatsApp number
* Area/location
* Delivery instructions
* Preferred delivery time

For delivery within Dzaleka Refugee Camp, use:

**Delivery Fee: MWK 2,000**

The delivery fee should be configurable in the application so it can be changed later.

---

## 9. Payment

Astra Restaurant requires customers to **pay in advance**.

Supported payment methods:

* Airtel Money
* TNM Mpamba
* Cash on Delivery — only if the restaurant chooses to enable it

The default checkout experience should emphasize advance payment.

Display a clear message:

**"Please pay in advance to confirm your order."**

The application should show:

* Total amount
* Selected payment method
* Payment instructions
* Payment reference/transaction number field
* Confirmation button

The payment system should be designed so that real payment integration can be added later.

Do not falsely show an order as "paid" unless payment has actually been confirmed.

---

## 10. Order Confirmation

After checkout, show a clear confirmation screen containing:

* Order number
* Customer name
* Items ordered
* Pickup/delivery selection
* Delivery location if applicable
* Scheduled time
* Payment method
* Total amount
* Order status

Example status:

**Order Received → Payment Verification → Preparing → Ready → Completed**

For delivery:

**Order Received → Payment Verified → Preparing → Out for Delivery → Delivered**

---

## 11. WhatsApp Integration

Astra Restaurant should have prominent WhatsApp contact buttons.

Numbers:

* +265 997 73 88 06
* +265 994 85 3121

Use WhatsApp as a support/contact channel.

The application should allow a customer to contact Astra Restaurant if they have questions about an order.

---

## 12. Bulk & Event Orders

Include a section for bulk and event orders.

Explain:

**"Planning an event or ordering for a group? Astra Restaurant accepts bulk orders."**

Customers should be encouraged to order at least one day in advance.

Include a CTA:

**Request a Bulk Order**

This can initially open a WhatsApp conversation or a simple inquiry form.

---

## 13. Customer Experience

The ordering flow should be extremely simple:

**Browse → Add Food → Cart → Pickup/Delivery → Time → Payment → Confirm**

Avoid unnecessary forms.

The app should be usable by someone who has never used the application before.

---

## 14. Responsive Design

The application must work well on:

* Android phones
* iPhones
* Tablets
* Desktop computers

Mobile should be the primary design priority.

---

## 15. Accessibility & Usability

Use:

* Large readable text
* High-contrast buttons
* Clear labels
* Simple navigation
* Large touch targets
* Clear error messages
* Minimal typing where possible

---

## 16. Suggested Navigation

Use a simple navigation structure:

**Home | Menu | Orders | Contact**

Include a persistent cart button showing the number of items.

On mobile, consider a bottom navigation bar for easier access.

---

## 17. Call-to-Action Strategy

The application should continuously encourage ordering without becoming annoying.

Primary CTA:

**Order Now**

Other CTAs:

* Add to Order
* Checkout
* Choose Delivery
* Choose Pickup
* Pay & Confirm Order
* Order for Later
* Bulk Order

---

## 18. Technical Expectations

Build the application as a modern web application that can eventually be deployed online.

The architecture should make it possible to add:

* Real payment integration
* Customer accounts
* Restaurant admin dashboard
* Order management
* Delivery management
* Order notifications
* Menu management
* Analytics
* Promotional coupons
* Customer order history

Do not overcomplicate the first version.

Build a polished MVP first.

---

## 19. Future Admin Dashboard

The project should be structured so an admin dashboard can later allow Astra Restaurant staff to:

* View incoming orders
* Confirm payments
* Change order status
* Update menu items
* Change prices
* Change delivery fees
* Mark items unavailable
* View daily sales
* View customer orders

---

## 20. Important Business Information

**Business:** Astra Restaurant
**Location:** New Katudza, Dzaleka Refugee Camp, Dowa, Malawi

**WhatsApp:**
+265 997 73 88 06
Phone: +265 994 85 3121

**Delivery:** Available within Dzaleka

**Default Dzaleka delivery fee:** MWK 2,000

**Preparation:** Customers should order at least 2 hours ahead.

**Payment:** Advance payment preferred/required for order confirmation.

**Bulk orders:** At least one day in advance.

---

## 21. Success Criteria

The finished application should make a customer think:

**"I want to order from here."**

A customer should be able to open the application and complete an order without needing assistance.

The design should look like a real, professionally built restaurant application—not a basic school/project website.
