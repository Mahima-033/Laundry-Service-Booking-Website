# Laundry Service Booking Website

A responsive **Laundry Service Booking Web Application** where users can view available laundry services, add them to a cart, and book the services by submitting their details. The application also sends a confirmation email after booking.

---

## 🚀 Features

- View different laundry services with pricing
- Add services to the cart
- Dynamic cart display with selected items
- Automatic total price calculation
- Booking form with user details
- Email confirmation using EmailJS
- Responsive layout using Tailwind CSS

---

## 🧺 Available Services

| Service | Price |
|------|------|
| Dry Cleaning | ₹200 |
| Wash & Fold | ₹100 |
| Ironing | ₹50 |
| Stain Removal | ₹300 |
| Leather & Suede Cleaning | ₹999 |
| Wedding Dress Cleaning | ₹3000 |

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript**
- **Tailwind CSS**
- **EmailJS**

---

## 📂 Project Structure

```
Laundry-Service-Website
│
├── index.html
├── script.js
├── style.css
│
├── images
│   ├── dry.jpg
│   ├── fold.jpg
│   ├── iron.jpg
│   ├── stain.jpg
│   ├── leather.png
│   ├── wedding-dress.png
│   └── icons
│
└── README.md
```

---

## ⚙️ How It Works

1. Users browse the list of laundry services.
2. Clicking **Add Item** adds the service to the cart.
3. The cart displays:
   - Serial number
   - Service name
   - Price
4. The total amount updates automatically.
5. Users fill in their contact details.
6. Clicking **Book Now** sends booking details via EmailJS.

---

## 📧 Email Integration

This project uses **EmailJS** to send booking confirmation emails.

Steps to configure:

1. Create an account on EmailJS
2. Create a **Service ID**
3. Create an **Email Template**
4. Copy your **Public Key**

Replace these in `script.js`:

```
emailjs.init("YOUR_PUBLIC_KEY")

emailjs.send(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
templateParams
)
```

---

## 💻 Installation

1. Clone the repository

```
git clone https://github.com/your-username/laundry-service-website.git
```

2. Open the project folder

3. Run the project by opening:

```
index.html
```

in your browser.

---

## 🔮 Future Improvements

- Add backend for storing bookings
- Payment gateway integration
- User login and authentication
- Order tracking system
- Admin dashboard

---

## 👩‍💻 Author

**Mahima Sharma**

B.Tech Computer Science Student

---

## 📜 License

This project is created for **learning and educational purposes**.
