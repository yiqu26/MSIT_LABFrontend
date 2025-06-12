import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* NGO 簡介 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">愛心 NGO</h3>
            <p className="text-gray-300 leading-relaxed">
              致力於幫助弱勢族群，透過愛心捐贈與志工服務，
              讓溫暖傳遞到每個需要幫助的角落。
            </p>
          </motion.div>

          {/* 聯絡資訊 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-secondary">聯絡我們</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 (02) 1234-5678</p>
              <p>✉️ info@ngo.org.tw</p>
              <p>📍 台北市中正區愛心路123號</p>
            </div>
          </motion.div>

          {/* 社群連結 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-secondary">追蹤我們</h3>
            <div className="flex space-x-4">
              {['📘', '📷', '🐦'].map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="text-2xl cursor-pointer hover:text-primary transition-colors duration-200"
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 愛心 NGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
