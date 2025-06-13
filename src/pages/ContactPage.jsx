import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactTypes = [
    { id: 'general', name: '一般詢問', icon: '💬' },
    { id: 'volunteer', name: '志工相關', icon: '🤝' },
    { id: 'donation', name: '捐贈相關', icon: '💝' },
    { id: 'partnership', name: '合作提案', icon: '🤝' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 這裡可以加入表單提交邏輯
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'general'
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-warmOrange text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">聯絡我們</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              有任何問題或想法，我們都很樂意聽取您的意見
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">發送訊息給我們</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      詢問類型
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {contactTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, type: type.id })}
                          className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                            formData.type === type.id
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                        >
                          <span className="text-lg mr-2">{type.icon}</span>
                          <span className="font-medium">{type.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
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
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        電話
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      主旨 *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      訊息內容 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="input-field"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-primary py-4 text-lg"
                  >
                    📤 發送訊息
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    訊息發送成功！
                  </h3>
                  <p className="text-gray-600">
                    我們會在 24 小時內回覆您的訊息
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Office Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">聯絡資訊</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: '📍',
                      title: '地址',
                      content: '台北市中正區愛心路 123 號 8 樓',
                      detail: '捷運站出口步行 3 分鐘'
                    },
                    {
                      icon: '📞',
                      title: '電話',
                      content: '(02) 1234-5678',
                      detail: '服務時間：週一至週五 9:00-17:00'
                    },
                    {
                      icon: '✉️',
                      title: 'Email',
                      content: 'info@lovefoundation.org.tw',
                      detail: '我們會在 24 小時內回覆'
                    },
                    {
                      icon: '📠',
                      title: '傳真',
                      content: '(02) 1234-5679',
                      detail: '24 小時接收文件'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-gray-700 font-medium">{item.content}</p>
                        <p className="text-sm text-gray-500">{item.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">關注我們</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: 'Facebook', icon: '📘', followers: '12K' },
                    { name: 'Instagram', icon: '📷', followers: '8.5K' },
                    { name: 'Line', icon: '💬', followers: '6K' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-all duration-300"
                    >
                      <div className="text-3xl mb-2">{social.icon}</div>
                      <div className="font-bold text-gray-800 text-sm">{social.name}</div>
                      <div className="text-xs text-gray-500">{social.followers} 追蹤</div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">服務時間</h3>
                <div className="space-y-3">
                  {[
                    { day: '週一至週五', time: '09:00 - 17:00', status: 'open' },
                    { day: '週六', time: '09:00 - 12:00', status: 'limited' },
                    { day: '週日及國定假日', time: '休息', status: 'closed' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-800">{schedule.day}</span>
                      <span className={`font-bold ${
                        schedule.status === 'open' ? 'text-green-600' :
                        schedule.status === 'limited' ? 'text-orange-600' :
                        'text-red-600'
                      }`}>
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
