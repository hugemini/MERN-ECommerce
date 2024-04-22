# MERN Ecommerce Project

Welcome to our MERN Ecommerce project! This README will guide you through the setup and features of our application.

## Description

Our project is a full-fledged ecommerce platform built using the MERN stack (MongoDB, Express.js, React, Node.js), providing a seamless shopping experience for both customers and administrators. It includes features such as product catalog, user authentication, product rating and review systems, an admin area to manage customers, products, and orders, a fully featured shopping cart with PayPal and credit/debit payments, as well as product search, carousel, pagination, and more.

## Features

- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Product Catalog**: Browse through a wide range of products.
- **Product Details**: View detailed information about each product, including price, description, and reviews.
- **Product Rating & Review System**: Users can rate and leave reviews for products.
- **Admin Area**: Administrators can manage customers, products, and orders.
- **Shopping Cart**: Add products to cart, update quantities, and proceed to checkout.
- **Payment Integration**: Securely pay using MOMO or credit/debit cards.
- **Search Functionality**: Search for products using keywords.
- **Carousel**: Interactive carousel for showcasing featured products.
- **Pagination**: Navigate through pages of products efficiently.

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your/repository.git
    ```

2. **Backend Setup**:
    - Navigate to the `backend` directory:
        ```bash
        cd backend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Start the server:
        ```bash
        npm start
        ```

3. **Frontend Setup**:
    - Navigate to the `frontend` directory:
        ```bash
        cd frontend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Start the React development server:
        ```bash
        npm start
        ```

4. **Set Up Environment Variables**:
    - Create a `.env` file in the `backend` directory and set the following variables:
        ```
        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        SECRET_KEY=your_secret_key
        PAYPAL_CLIENT_ID=your_paypal_client_id
        ```

5. **Access the Application**:
    - Visit `http://localhost:3000` in your web browser to access the application.

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

