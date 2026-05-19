<div align="center">

<img src="poslogo.png" alt="Bharat POS Logo" width="96" height="96" style="border-radius:20px;">

# 🧾 Bharat POS

### Full-Featured Indian Point of Sale System — PWA Ready

[![PWA](https://img.shields.io/badge/PWA-Ready-F97316?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![HTML](https://img.shields.io/badge/Built%20With-HTML%20%2F%20CSS%20%2F%20JS-2563EB?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![License](https://img.shields.io/badge/License-MIT-16A34A?style=flat-square)](LICENSE)
[![Made in India](https://img.shields.io/badge/Made%20in-India%20🇮🇳-FF9933?style=flat-square)](https://en.wikipedia.org/wiki/India)

> A complete, single-file POS (Point of Sale) system built for Indian businesses.  
> Works fully **offline** as a Progressive Web App — no server or installation required.

[**🚀 Live Demo**](#) · [**📸 Screenshots**](#screenshots) · [**📦 Features**](#features) · [**🛠 Setup**](#setup)

</div>

---

## ✨ Features

### 🛒 Point of Sale
- Fast product search with **barcode scanner** (camera / USB)
- Category-based product grid with variant support
- Cart management — qty, discounts, holds & recall
- Multi-payment modes: Cash · Card · UPI · Split
- **Thermal receipt printing** (80mm) & WhatsApp sharing

### 📦 Inventory & Products
- Product management with variants (size, color, etc.)
- Stock tracking with low-stock alerts
- Barcode generation (JsBarcode)
- Purchase Orders, GRNs, and Purchase Returns
- Supplier management & Debit Notes

### 💰 Accounting & Finance
- Sales & purchase ledger
- Customer credit (khata) management
- GST-ready tax calculations (CGST / SGST / IGST)
- Day-close reports & cash drawer reconciliation

### 👥 CRM & Customers
- Customer profiles with purchase history
- Loyalty points system
- WhatsApp-integrated communication

### 📊 Reports & Analytics
- Daily, weekly, monthly sales summaries
- Top-selling products & category breakdown
- Profit/margin calculator

### 🔔 Smart Notifications
- Low stock alerts
- Payment reminders
- In-app notification center

### 📱 Progressive Web App (PWA)
- **Installable** on Android, iOS, Windows, Mac
- Full **offline support** via Service Worker (Cache-First)
- Online/offline status indicator
- Auto-update detection
- Push notification ready

---

## 📸 Screenshots

> *(Add screenshots here after deploying)*

---

## 🛠 Setup

### Option 1 — Open Directly (Quickest)
```bash
# Just open the file in any modern browser
open index1.html
```
> ⚠️ PWA install prompt requires HTTPS or localhost. Opening as `file://` will NOT trigger it.

---

### Option 2 — Local Server (Recommended for PWA)

**Using Node.js `serve`:**
```bash
npx serve .
# Open http://localhost:3000
```

**Using Python:**
```bash
# Python 3
python -m http.server 8080
# Open http://localhost:8080
```

**Using VS Code:**
Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension → Right-click `index1.html` → *Open with Live Server*

---

### Option 3 — Deploy to GitHub Pages (Free Hosting + PWA)

1. Fork this repo
2. Go to **Settings → Pages**
3. Set source: `main` branch, `/ (root)` folder
4. Visit `https://<your-username>.github.io/<repo-name>/index1.html`

The app will be fully installable as a PWA on GitHub Pages! ✅

---

## 📁 File Structure

```
bharat-pos/
├── index1.html      # Complete POS application (single file)
├── manifest.json    # PWA Web App Manifest
├── sw.js            # Service Worker (offline caching)
├── poslogo.png      # App icon (192×192 & 512×512)
└── README.md        # This file
```

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | Vanilla CSS (CSS Custom Properties) |
| Logic | Vanilla JavaScript (ES2020+) |
| Storage | `localStorage` / `IndexedDB` (planned) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Barcode Scanner | [html5-qrcode](https://github.com/mebjas/html5-qrcode) |
| Barcode Generator | [JsBarcode](https://github.com/lindell/JsBarcode) |
| PWA | Service Worker API + Web App Manifest |

---

## ⚙️ PWA Details

| Feature | Status |
|---|---|
| Installable (A2HS) | ✅ |
| Offline Support | ✅ Cache-First |
| Service Worker | ✅ |
| Web App Manifest | ✅ |
| Push Notifications | 🔜 Ready (infrastructure in place) |
| Background Sync | 🔜 Planned |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

Made with ❤️ for Indian businesses 🇮🇳

**[⭐ Star this repo if it helped you!](https://github.com)**

</div>
