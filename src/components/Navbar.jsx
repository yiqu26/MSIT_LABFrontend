import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, userType } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary"
            >
              🌟 愛心 NGO
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                首頁
              </Link>
              <Link 
                to="/#news" 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                最新消息
              </Link>
              <Link 
                to="/donate" 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                捐贈物資
              </Link>
              <span className="text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">
                志工加入
              </span>
            </div>
          </div>

          {/* Auth Button */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {userType === 'social_worker' ? '社工' : '會員'}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn-secondary text-sm"
                >
                  登出
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-primary">
                登入
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
