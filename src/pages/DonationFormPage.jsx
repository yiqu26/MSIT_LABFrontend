import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DonationFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    items: [{ category: '', quantity: '', note: '' }],
    generalNote: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const donationCategories = [
    '衣物',
    '文具',
    '奶粉',
    '書籍',
    '玩具',
    '生活用品',
    '食品',
    '其他'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = formData.items.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setFormData({ ...formData, items: newItems });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { category: '', quantity: '', note: '' }]
    });
  };

  const removeItem = (index) => {
    if (formData.items.length > 1) {
      const newItems = formData.items.filter((_, i) => i !== index);
      setFormData({ ...formData, items: newItems });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模擬 API 調用
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              key="form"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl mb-6"
                >
                  💝
                </motion.div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  愛心物資捐贈
                </h1>
                <p className="text-lg text-gray-600">
                  感謝您的愛心，每一份捐贈都能帶來溫暖與希望
                </p>
              </div>

              {/* Form */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* 個人資料 */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <span className="text-primary mr-2">👤</span>
                      基本資料
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          姓名 *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="請輸入您的姓名"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          聯絡電話 *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="請輸入聯絡電話"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        電子信箱 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="請輸入電子信箱"
                        required
                      />
                    </div>
                  </div>

                  {/* 捐贈物品 */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <span className="text-secondary mr-2">📦</span>
                      捐贈物品
                    </h3>
                    
                    {formData.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-2 border-gray-100 rounded-lg p-6 mb-4 relative"
                      >
                        {formData.items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700 
                                     transition-colors duration-200"
                          >
                            ❌
                          </button>
                        )}
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              物品類別 *
                            </label>
                            <select
                              value={item.category}
                              onChange={(e) => handleItemChange(index, 'category', e.target.value)}
                              className="input-field"
                              required
                            >
                              <option value="">請選擇類別</option>
                              {donationCategories.map(category => (
                                <option key={category} value={category}>
                                  {category}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              數量 *
                            </label>
                            <input
                              type="text"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                              className="input-field"
                              placeholder="例：10件、5袋"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              備註說明
                            </label>
                            <input
                              type="text"
                              value={item.note}
                              onChange={(e) => handleItemChange(index, 'note', e.target.value)}
                              className="input-field"
                              placeholder="顏色、尺寸等"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    <motion.button
                      type="button"
                      onClick={addItem}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full border-2 border-dashed border-gray-300 rounded-lg 
                               py-4 text-gray-600 hover:border-primary hover:text-primary 
                               transition-all duration-200"
                    >
                      ➕ 新增物品項目
                    </motion.button>
                  </div>

                  {/* 整體備註 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      整體備註
                    </label>
                    <textarea
                      name="generalNote"
                      value={formData.generalNote}
                      onChange={handleInputChange}
                      rows={4}
                      className="input-field"
                      placeholder="如有其他需要說明的事項，請在此填寫..."
                    />
                  </div>

                  {/* 送出按鈕 */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 text-lg font-medium rounded-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'btn-primary'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        送出中...
                      </span>
                    ) : (
                      '💝 送出愛心捐贈'
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          ) : (
            /* 成功頁面 */
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              key="success"
              className="text-center py-20"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: 3,
                  ease: "easeInOut"
                }}
                className="text-8xl mb-8"
              >
                🎉
              </motion.div>
              
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                捐贈申請已送出！
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                感謝您的愛心捐贈！我們已收到您的申請，
                工作人員將在 2-3 個工作天內與您聯繫，安排物資收取事宜。
              </p>
              
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">後續流程：</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <span className="text-primary mr-3">📞</span>
                    <span>工作人員電話聯繫確認</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-3">📅</span>
                    <span>安排收取時間與地點</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-3">🚚</span>
                    <span>專人到府收取物資</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-3">💌</span>
                    <span>發送感謝函與收據</span>
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    items: [{ category: '', quantity: '', note: '' }],
                    generalNote: ''
                  });
                }}
                className="btn-primary text-lg py-3 px-8 mr-4"
              >
                繼續捐贈
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/'}
                className="btn-secondary text-lg py-3 px-8"
              >
                回到首頁
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DonationFormPage;
