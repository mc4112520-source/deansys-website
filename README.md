# DEANSYS – Industrial Engineering Website

A modern, high-performance, responsive industrial mechanical engineering, CAD drafting, and manufactured product showcase website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🏢 Company Profile

- **Company Name**: DEANSYS
- **Mobile Number**: [+91 99539 68159](tel:+919953968159)
- **WhatsApp Number**: [+91 99539 68159](https://wa.me/919953968159?text=Hello%20DEANSYS%2C%20I%20am%20interested%20in%20your%20engineering%20services.%20Please%20share%20more%20details.)
- **Website Title**: DEANSYS | Industrial Engineering Solutions
- **Meta Description**: DEANSYS provides mechanical engineering, 3D modelling, industrial design and manufacturing support solutions.

---

## 🎨 Design System

- **Primary**: Deep Navy Blue (`#101D32`)
- **Secondary**: Metallic Grey (`#8793A3`)
- **Accent**: Industrial Orange (`#F28C28`)
- **Background**: White (`#FFFFFF`)
- **Light Sections**: `#F4F6F8`
- **Typography**: Plus Jakarta Sans (body & headings), Space Grotesk (display), JetBrains Mono (technical telemetry & CAD readouts)

---

## ⚙️ Central Configuration (`src/config/siteConfig.ts`)

All company contact information, telephone links, and WhatsApp destination numbers are centralized in **one single file**:
👉 [`src/config/siteConfig.ts`](file:///d:/VeerTech/src/config/siteConfig.ts)

```ts
export const siteConfig = {
  company: {
    name: 'DEANSYS',
    shortName: 'DEANSYS',
    brandTag: 'DEANSYS',
    tagline: 'Industrial Engineering Solutions',
    description: 'DEANSYS provides mechanical engineering, 3D modelling, industrial design and manufacturing support solutions.'
  },
  contact: {
    email: 'contact@deansys.com',
    altEmail: 'info@deansys.com',
    phone: '+919953968159',
    phoneDisplay: '+91 99539 68159',
    altPhone: '+91 99539 68159',
    address: 'Plot No. 42, Industrial Area Phase II, Mechanical Engineering Hub, India',
    officeHours: 'Mon - Sat: 09:00 - 19:00 IST',
    emergencySupport: 'Sunday: Closed (Emergency Support On-Demand)',
    standards: 'ASME Y14.5 & ISO-GPS Aligned'
  },
  whatsapp: {
    phoneNumber: '919953968159',
    displayNumber: '+91 99539 68159',
    defaultMessage: 'Hello DEANSYS, I am interested in your engineering services. Please share more details.'
  }
};
```

---

## 💻 Running the Application

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Generates optimized production assets in `dist/`.

### Preview Production Build
```bash
npm run preview
```
