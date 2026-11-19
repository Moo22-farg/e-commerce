import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';

// Lazy loaded pages
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const Wishlist = React.lazy(() => import('./pages/Wishlist'));
const Login = React.lazy(() => import('./pages/Login'));
const Account = React.lazy(() => import('./pages/Account'));
const ChangePassword = React.lazy(() => import('./pages/ChangePassword'));
const Returns = React.lazy(() => import('./pages/Returns'));
const Cancellations = React.lazy(() => import('./pages/Cancellations'));
const Orders = React.lazy(() => import('./pages/Orders'));
const AdminOrders = React.lazy(() => import('./pages/AdminOrders'));
const AdminProducts = React.lazy(() => import('./pages/AdminProducts'));
const AdminCategories = React.lazy(() => import('./pages/AdminCategories'));
const AdminCoupons = React.lazy(() => import('./pages/AdminCoupons'));
const AdminUsers = React.lazy(() => import('./pages/AdminUsers'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword'));
const About = React.lazy(() => import('./pages/About'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Products = React.lazy(() => import('./pages/Products'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { NotificationProvider } from './context/NotificationContext';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Login />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/change-password" element={<ChangePassword />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resetpassword/:token" element={<ResetPassword />} />
              
                    {/* Protected Routes */}
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/orders" element={<AdminOrders />} />
                    <Route path="/admin/products" element={<AdminProducts />} />
                    <Route path="/admin/categories" element={<AdminCategories />} />
                    <Route path="/admin/coupons" element={<AdminCoupons />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/returns" element={<Returns />} />
                    <Route path="/cancellations" element={<Cancellations />} />
                    <Route path="products" element={<Products />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
              </Routes>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
