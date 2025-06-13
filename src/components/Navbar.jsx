import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout, userType } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: '首頁', path: '/', icon: '🏠' },
    { name: '活動資訊', path: '/activities', icon: '🎯' },
    { name: '捐贈資訊', path: '/donations', icon: '💝' },
    { name: '認購資訊', path: '/purchase', icon: '🛒' },
    { name: '聯絡我們', path: '/contact', icon: '📞' },
  ];

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
              className="flex items-center space-x-2"
            >
              <span className="text-3xl">🌟</span>
              <div>
                <div className="text-xl font-bold text-primary">愛心基金會</div>
                <div className="text-xs text-gray-500">Love Foundation</div>
              </div>
            </motion.div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                    location.pathname === item.path
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <span className="text-gray-600">歡迎，</span>
                  <span className="font-medium text-primary">
                    {userType === 'social_worker' ? '社工' : '會員'}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn-secondary text-sm px-4 py-2"
                >
                  登出
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  登入
                </Link>
                <Link to="/register" className="btn-primary text-sm px-4 py-2">
                  註冊
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`px-3 py-1 rounded-lg transition-all duration-200 flex items-center space-x-1 text-sm ${
                  location.pathname === item.path
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
