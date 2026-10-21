# SportStore - Full-Stack E-Commerce Platform

**[Live Demo](https://e-commerce-website-hbvb.onrender.com)**

SportStore is a fully functional, full-stack e-commerce web application focused on sports apparel and footwear. It features a complete front-end user experience backed by a Node.js/Express server and a MongoDB database.

## Features & Modules
* **Shopping Cart & Orders:** Full cart management and order processing.
* **User Accounts:** Secure registration, authentication, and profile management.
* **Product Reviews:** User rating and review system for all products.
* **Community Forum:** Discussion boards for users to interact and share advice.
* **Blog:** Content management for sports-related articles and news.
* **Administration:** Dashboard for managing users, products, and site data.

## Tech Stack
* **Frontend:** HTML, CSS, JavaScript, EJS (Embedded JavaScript templates)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose
* **Security & Auth:** bcrypt (password hashing)

## Local Installation

1. Clone the repository and navigate to the server folder:
   ```bash
   cd server

2. Install all required dependencies:
   npm install

3. Create a .env file in the server directory and configure your environment variables:
    PORT=3000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/EcommerceStore
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_google_app_password

4. Seed the database with sample products, users, and forum threads:
    node seed.js --clear

5. Start the local server:
    node index.js