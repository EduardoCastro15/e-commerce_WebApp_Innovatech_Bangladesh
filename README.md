# **Project Name: e-commerce_WebApp_Innovatech_Bangladesh**

## **Overview**
This project is a digital marketplace designed to connect **farmers** with **consumers**, enabling direct sales of agricultural products. Inspired by platforms like **Amazon, Mercado Libre, and Mache Haiti**, our goal is to provide a seamless, **mobile-friendly, and multilingual** experience that enhances market access for rural producers.

## **Features**
- 🌱 **User Registration & Profiles** (Farmers & Consumers)
- 🛍 **Product Listings & Categories**
- 🔎 **Search & Filter System**
- 📦 **Order Management & Tracking**
- 💳 **Secure Payments (Stripe/MercadoPago/Mobile Payments)**
- ⭐ **Ratings & Reviews**
- 🌍 **Multilingual Support (English, Spanish, Bengali, etc.)**
- 📡 **Offline Mode (for low-connectivity regions)**

## **Technology Stack**
### **Frontend**
- **Framework:** Next.js (React-based, SEO-friendly)
- **Styling:** Tailwind CSS
- **State Management:** Redux / Context API

### **Backend**
- **Framework:** Express.js (Node.js-based, lightweight and modular)
- **Database:** PostgreSQL (via Prisma)
- **API:** RESTful (secured with JWT)

### **Infrastructure**
- **Hosting:** Vercel (Frontend), Render/AWS/Other (Backend)
- **CI/CD:** GitHub Actions
- **Containerization:** Docker (optional for production environments)

### **Payment Integration**
- Stripe / MercadoPago / Mobile Payments
- Google Maps API (for delivery tracking)

## **Installation & Setup**
### **1. Clone the Repository**
```sh
git clone https://github.com/EduardoCastro15/Innovatech-Bangladesh.git
cd Innovatech-Bangladesh
```

### **2. Install Dependencies**
#### **Frontend**
```sh
cd frontend
npm install
```

#### **Backend**
```sh
cd backend
npm install
```

### **3. Set Up Environment Variables**
Create a `.env` file in both `frontend/` and `backend/` directories:

#### `.env` (Frontend)
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

#### `.env` (Backend)
```
DATABASE_URL=postgres://yourusername:yourpassword@localhost:5432/yourdatabase
JWT_SECRET=your_jwt_secret
STRIPE_API_KEY=your_stripe_api_key
```

### **4. Run the Application**
#### **Frontend**
```sh
npm run dev
```

#### **Backend**
```sh
npm run start
```

The frontend will be available at `http://localhost:3000/` and the backend at `http://localhost:3001/`.

## **Project Roadmap**
### **Phase 1: MVP Development** (March - June 2025)
- Implement basic marketplace features
- Setup database and authentication
- Develop frontend UI/UX

### **Phase 2: Expansion & Scaling** (July - December 2025)
- Logistics & delivery integration
- AI-driven recommendations
- Financial services (microloans, savings)

## **License**
This project is licensed under a **Proprietary License**. Unauthorized distribution, modification, or use without permission is strictly prohibited.

## **Contributing**
We welcome contributions! If you'd like to contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added feature X"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## **Contact**
For inquiries, please contact **Jorge Eduardo Castro Cruces** at **georgecastrocruces1515@gmail.com** or visit [LinkedIn](https://www.linkedin.com/in/jorge-eduardo-castro-cruces-295610233/)

## **Folder Structure**
```bash
.
├── Innovatech-Bangladesh
│   ├── LICENSE
│   ├── Providers.tsx
│   ├── README.md
│   ├── app
│   │   ├── (dashboard)
│   │   ├── _zustand
│   │   ├── actions
│   │   ├── api
│   │   ├── cart
│   │   ├── checkout
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── login
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── product
│   │   ├── register
│   │   ├── search
│   │   ├── shop
│   │   └── wishlist
│   ├── components
│   │   ├── AddToCartSingleProductBtn.tsx
│   │   ├── AddToWishlistBtn.tsx
│   │   ├── AdminOrders.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── BuyNowSingleProductBtn.tsx
│   │   ├── CartElement.tsx
│   │   ├── CategoryItem.tsx
│   │   ├── CategoryMenu.tsx
│   │   ├── Checkbox.tsx
│   │   ├── ColorInput.tsx
│   │   ├── CustomButton.tsx
│   │   ├── DashboardProductTable.tsx
│   │   ├── DashboardSidebar.tsx
│   │   ├── Filters.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeaderTop.tsx
│   │   ├── Heading.tsx
│   │   ├── HeartElement.tsx
│   │   ├── Hero.tsx
│   │   ├── Incentives.tsx
│   │   ├── IntroducingSection.tsx
│   │   ├── Newsletter.tsx
│   │   ├── OrderItem.tsx
│   │   ├── Pagination.tsx
│   │   ├── ProductItem.tsx
│   │   ├── ProductItemRating.tsx
│   │   ├── ProductTabs.tsx
│   │   ├── Products.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── QuantityInput.tsx
│   │   ├── QuantityInputCart.tsx
│   │   ├── Range.tsx
│   │   ├── RangeWithLabels.tsx
│   │   ├── RatingPercentElement.tsx
│   │   ├── SearchInput.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── SimpleSlider.tsx
│   │   ├── SingleProductDynamicFields.tsx
│   │   ├── SingleProductRating.tsx
│   │   ├── SingleReview.tsx
│   │   ├── SortBy.tsx
│   │   ├── StatsElement.tsx
│   │   ├── StockAvailabillity.tsx
│   │   ├── UrgencyText.tsx
│   │   ├── WishItem.tsx
│   │   └── index.ts
│   ├── helpers
│   │   ├── is-browser.ts
│   │   └── is-small-screen.ts
│   ├── lib
│   │   └── utils.ts
│   ├── next-env.d.ts
│   ├── next.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── prisma
│   │   └── schema.prisma
│   ├── server
│   │   ├── app.js
│   │   ├── controllers
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── prisma
│   │   ├── routes
│   │   └── utills
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── typings.d.ts
│   └── utils
│       ├── SessionProvider.tsx
│       ├── actions.ts
│       ├── categoryFormating.ts
│       ├── db.ts
│       ├── insertDemoData.js
│       └── schema.ts
├── LICENSE
├── README.md
└── structure.txt
```
