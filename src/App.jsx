import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DonationFormPage from './pages/DonationFormPage';

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
          
          <Route path="/donate" element={
            <Layout>
              <DonationFormPage />
            </Layout>
          } />
          
          {/* 404 頁面 */}
          <Route path="*" element={
            <Layout>
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤔</div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    找不到頁面
                  </h1>
                  <p className="text-gray-600 mb-8">
                    抱歉，您所尋找的頁面不存在
                  </p>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="btn-primary"
                  >
                    回到首頁
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
