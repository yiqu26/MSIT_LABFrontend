import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: '首頁', path: '/' },
    { name: '活動資訊', path: '/activities' },
    { name: '物資認購', path: '/purchase' },
    { name: '登入/註冊', path: '/login' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'Line', icon: '💬', url: 'https://line.me' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo 與簡介 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🌟</span>
              <div>
                <div className="text-xl font-bold text-primary">愛心基金會</div>
                <div className="text-sm text-gray-400">Love Foundation</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              致力於幫助弱勢族群，透過愛心捐贈、志工服務與社區關懷，
              讓溫暖傳遞到每個需要幫助的角落，用愛心點亮希望之光。
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">1,000+</div>
                <div className="text-sm text-gray-400">受助家庭</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm text-gray-400">志工夥伴</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warmOrange">10K+</div>
                <div className="text-sm text-gray-400">愛心物資</div>
              </div>
            </div>
          </motion.div>

          {/* 快速連結 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-secondary">快速連結</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* 聯絡資訊與社群 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-secondary">聯絡我們</h3>
            <div className="space-y-4 text-gray-300 mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-lg">📞</span>
                <span>(02) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">✉️</span>
                <span>info@lovefoundation.org.tw</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📍</span>
                <span>台北市中正區愛心路123號</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">🕒</span>
                <span>週一至週五 9:00-17:00</span>
              </div>
            </div>

            <h4 className="font-bold mb-4 text-secondary">追蹤我們</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-2xl hover:text-primary transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 底部版權 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 愛心基金會 Love Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                隱私權政策
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                使用條款
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                網站地圖
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
