import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('public'); // 'public' or 'social_worker'
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ username: '', password: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialWorkerLogin = (e) => {
    e.preventDefault();
    // 這裡可以加入實際的登入驗證邏輯
    login({ username: formData.username }, 'social_worker');
    navigate('/'); // 導向後台系統
  };

  const handlePublicAction = (action) => {
    login({ type: 'public' }, 'public');
    if (action === 'donate') {
      navigate('/donate');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* 左側插畫區域 */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary to-warmOrange p-12 flex flex-col justify-center items-center text-white"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl mb-6"
          >
            🤝
          </motion.div>
          <h2 className="text-3xl font-bold mb-4 text-center">
            讓愛傳遞
          </h2>
          <p className="text-center text-lg opacity-90">
            每一份關懷都能點亮希望，
            <br />
            每一個行動都能改變世界
          </p>
        </motion.div>

        {/* 右側登入區域 */}
        <div className="p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tab 切換 */}
            <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => handleTabChange('public')}
                className={`flex-1 py-3 px-4 rounded-md transition-all duration-300 font-medium ${
                  activeTab === 'public' 
                    ? 'bg-white text-primary shadow-md' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                一般民眾
              </button>
              <button
                onClick={() => handleTabChange('social_worker')}
                className={`flex-1 py-3 px-4 rounded-md transition-all duration-300 font-medium ${
                  activeTab === 'social_worker' 
                    ? 'bg-white text-primary shadow-md' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
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
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      歡迎來到愛心平台
                    </h3>
                    <p className="text-gray-600">
                      選擇您想要進行的行動
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePublicAction('donate')}
                    className="w-full btn-primary py-4 text-lg"
                  >
                    💝 我要捐贈物資
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePublicAction('story')}
                    className="w-full btn-secondary py-4 text-lg"
                  >
                    📖 看看我們的故事
                  </motion.button>
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      社工人員登入
                    </h3>
                    <p className="text-gray-600">
                      請輸入您的帳號密碼
                    </p>
                  </div>

                  <form onSubmit={handleSocialWorkerLogin} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        帳號
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="請輸入帳號"
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
                      className="w-full btn-primary py-4 text-lg"
                    >
                      🔑 登入系統
                    </motion.button>
                  </form>
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
