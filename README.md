# 🍽️ Astra Restaurant

**Fresh meals. Made with care. Delivered with love.**

A mobile-first ordering app for Astra Restaurant — New Katudza, Dzaleka Refugee Camp, Dowa, Malawi. Browse the menu, build a cart, choose pickup or delivery, schedule a time, and pay in advance — all in a few taps.

🔗 [REQUIREMENT.md](REQUIREMENT.md) · [CLAUDE.md](CLAUDE.md)

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

## Stack

React · Vite · Tailwind CSS · React Router — no backend required; cart and orders persist in `localStorage`.

## Highlights

- 🛒 Full ordering flow: **Browse → Cart → Pickup/Delivery → Time → Payment → Confirm**
- ⏰ Enforces Astra's 2-hour minimum lead time on every order
- 💳 Advance payment via Airtel Money / TNM Mpamba — never marks an order "paid" without real confirmation
- 📱 WhatsApp support, bulk-order and custom/off-menu order enquiries built in
- 📤 Placing an order opens WhatsApp with the full order details ready to send to Astra — that's how the restaurant is notified, no backend needed
- 🎨 Astra brand palette (orange · purple · gold · apple green) used tastefully, not all at once

## Configure the Business

One file each — no hunting through components:

| What | Where |
|---|---|
| Delivery fee, lead time, WhatsApp/call numbers, payment methods, today's kitchen banner | [`src/data/config.js`](src/data/config.js) |
| Menu items, prices, categories | [`src/data/menu.js`](src/data/menu.js) |

## Real Photos

Most dishes already use a real, openly-licensed photo (see [`public/images/menu/CREDITS.md`](public/images/menu/CREDITS.md) for sources); anything without one renders a designed placeholder. Drop a URL into an item's `image` field in `menu.js` to swap in Astra's own photography and it's used automatically — see [`DishImage.jsx`](src/components/DishImage.jsx).

## Contact

📍 New Katudza, Dzaleka Refugee Camp, Dowa, Malawi
📱 +265 997 73 88 06 · +265 994 85 3121
