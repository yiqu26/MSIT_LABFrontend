import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('public');
  const [isLogin, setIsLogin] = useState(true); // true for login, false for register
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    name: ''
  });
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsLogin(true); // Reset to login mode when switching tabs
    setFormData({
      username: '',
      password: '',
      email: '',
      confirmPassword: '',
      name: ''
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (activeTab === 'social_worker') {
      // Social worker login
      login({ username: formData.username }, 'social_worker');
      navigate('/'); // 可以改為後台路由
    } else {
      // Public user login/register
      login({ 
        username: formData.username || formData.name,
        email: formData.email 
      }, 'public');
      navigate('/');
    }
  };

  const handlePublicAction = (action) => {
    login({ type: 'public' }, 'public');
    if (action === 'activities') {
      navigate('/activities');
    } else if (action === 'purchase') {
      navigate('/purchase');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* 左側形象區域 */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-primary to-warmOrange p-12 flex flex-col justify-center items-center text-white"
        >
          {/* 背景圖片 */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
            }}
          />
          
          <div className="relative z-10 text-center">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-7xl mb-8"
            >
              🤝
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6">
              讓愛傳遞無限
            </h2>
            
            <div className="space-y-4 text-lg opacity-95">
              <p>🌟 每一份關懷都能點亮希望</p>
              <p>💝 每一個行動都能改變世界</p>
              <p>🤗 讓我們一起創造更美好的未來</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-center text-sm">
              <div>
                <div className="text-2xl font-bold">1,000+</div>
                <div className="opacity-90">受助家庭</div>
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="opacity-90">志工夥伴</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 右側功能區域 */}
        <div className="p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tab 切換 */}
            <div className="flex mb-8 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => handleTabChange('public')}
                className={`flex-1 py-4 px-6 rounded-lg transition-all duration-300 font-bold ${
                  activeTab === 'public' 
                    ? 'bg-white text-primary shadow-lg transform scale-95' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="text-lg mb-1">👥</div>
                一般民眾
              </button>
              <button
                onClick={() => handleTabChange('social_worker')}
                className={`flex-1 py-4 px-6 rounded-lg transition-all duration-300 font-bold ${
                  activeTab === 'social_worker' 
                    ? 'bg-white text-primary shadow-lg transform scale-95' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="text-lg mb-1">💼</div>
                社工人員
              </button>
            </div>

            {/* 內容切換 */}
            <AnimatePresence mode="wait">
              {activeTab === 'public' ? (
                <motion.div
                  key="public"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      歡迎參與愛心行動
                    </h3>
                    <p className="text-gray-600 text-lg">
                      選擇您想要的參與方式
                    </p>
                  </div>

                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePublicAction('activities')}
                      className="w-full bg-gradient-to-r from-primary to-warmOrange text-white py-4 px-6 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="text-2xl mr-3">🤝</span>
                      參與志工活動
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePublicAction('purchase')}
                      className="w-full bg-gradient-to-r from-secondary to-softGreen text-white py-4 px-6 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="text-2xl mr-3">🛒</span>
                      愛心物資認購
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsLogin(!isLogin)}
                      className="w-full border-2 border-primary text-primary py-4 px-6 rounded-xl text-lg font-bold hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <span className="text-2xl mr-3">🔑</span>
                      {isLogin ? '會員登入' : '新會員註冊'}
                    </motion.button>
                  </div>

                  {/* 登入/註冊表單 */}
                  <AnimatePresence>
                    {(isLogin || !isLogin) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6"
                      >
                        <form onSubmit={handleSubmit} className="space-y-4">
                          {!isLogin && (
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                姓名
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="input-field"
                                placeholder="請輸入您的姓名"
                                required={!isLogin}
                              />
                            </div>
                          )}
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              {isLogin ? '帳號' : '電子信箱'}
                            </label>
                            <input
                              type={isLogin ? 'text' : 'email'}
                              name={isLogin ? 'username' : 'email'}
                              value={isLogin ? formData.username : formData.email}
                              onChange={handleInputChange}
                              className="input-field"
                              placeholder={isLogin ? '請輸入帳號' : '請輸入電子信箱'}
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              密碼
                            </label>
                            <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                              className="input-field"
                              placeholder="請輸入密碼"
                              required
                            />
                          </div>

                          {!isLogin && (
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                確認密碼
                              </label>
                              <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="input-field"
                                placeholder="請再次輸入密碼"
                                required={!isLogin}
                              />
                            </div>
                          )}

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full btn-primary py-3"
                          >
                            {isLogin ? '登入' : '註冊'}
                          </motion.button>
                        </form>
                        
                        <div className="mt-4 text-center">
                          <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-primary hover:text-warmOrange transition-colors duration-200"
                          >
                            {isLogin ? '還沒有帳號？立即註冊' : '已有帳號？立即登入'}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key="social_worker"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      社工管理系統
                    </h3>
                    <p className="text-gray-600">
                      請輸入您的帳號密碼登入後台系統
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        社工帳號
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="請輸入社工帳號"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        密碼
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="請輸入密碼"
                        required
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white py-4 rounded-xl text-lg font-bold hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
                    >
                      🔐 登入管理系統
                    </motion.button>
                  </form>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>忘記密碼？請聯繫系統管理員</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
