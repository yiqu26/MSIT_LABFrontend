import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DonationFormPage from './pages/DonationFormPage';
import ActivitiesPage from './pages/ActivitiesPage';
import PurchasePage from './pages/PurchasePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 登入頁面不使用 Layout */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* 其他頁面使用 Layout */}
          <Route path="/" element={
            <Layout>
              <HomePage />
            </Layout>
          } />
          
          <Route path="/activities" element={
            <Layout>
              <ActivitiesPage />
            </Layout>
          } />
          
          <Route path="/purchase" element={
            <Layout>
              <PurchasePage />
            </Layout>
          } />
          
          <Route path="/contact" element={
            <Layout>
              <ContactPage />
            </Layout>
          } />
          
          <Route path="/donate" element={
            <Layout>
              <DonationFormPage />
            </Layout>
          } />
          
          <Route path="/donations" element={
            <Layout>
              <DonationFormPage />
            </Layout>
          } />
          
          {/* 404 頁面 */}
          <Route path="*" element={
            <Layout>
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center py-20">
                  <div className="text-8xl mb-6">🤔</div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    找不到頁面
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    抱歉，您所尋找的頁面不存在
                  </p>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="btn-primary text-lg py-3 px-6"
                  >
                    📍 回到首頁
                  </button>
                </div>
              </div>
            </Layout>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
