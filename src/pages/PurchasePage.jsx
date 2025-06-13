import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PurchasePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);

  const categories = [
    { id: 'all', name: '全部物資', icon: '🏪' },
    { id: 'food', name: '食物營養', icon: '🍎' },
    { id: 'education', name: '教育用品', icon: '📚' },
    { id: 'clothing', name: '生活衣物', icon: '👕' },
    { id: 'medical', name: '醫療用品', icon: '💊' }
  ];

  const items = [
    {
      id: 1,
      name: "學童營養午餐",
      category: "food",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 55,
      unit: "份/月",
      needed: 150,
      sponsored: 89,
      description: "為偏鄉學童提供營養均衡的午餐，確保他們有足夠的營養支持學習",
      impact: "可幫助 1 位學童一個月的營養需求"
    },
    {
      id: 2,
      name: "學習文具用品包",
      category: "education",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 150,
      unit: "套",
      needed: 80,
      sponsored: 34,
      description: "包含筆記本、鉛筆、橡皮擦、尺等基本學習用品",
      impact: "可滿足 1 位學童整學期的文具需求"
    },
    {
      id: 3,
      name: "保暖衣物包",
      category: "clothing",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 300,
      unit: "套",
      needed: 200,
      sponsored: 156,
      description: "包含保暖外套、毛衣、圍巾等冬季必需品",
      impact: "可幫助 1 位弱勢朋友度過溫暖冬天"
    },
    {
      id: 4,
      name: "急難救助金",
      category: "medical",
      image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 1000,
      unit: "份",
      needed: 50,
      sponsored: 18,
      description: "協助突遭困難的家庭渡過難關，包含醫療費用、生活費等",
      impact: "可提供 1 個家庭緊急援助"
    },
    {
      id: 5,
      name: "嬰幼兒奶粉",
      category: "food",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 280,
      unit: "罐",
      needed: 120,
      sponsored: 67,
      description: "為弱勢家庭的嬰幼兒提供優質奶粉，確保營養攝取",
      impact: "可支持 1 位嬰幼兒 2 週的營養需求"
    },
    {
      id: 6,
      name: "課後輔導費用",
      category: "education",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 800,
      unit: "月",
      needed: 60,
      sponsored: 23,
      description: "提供專業老師進行課後輔導，幫助學童課業進步",
      impact: "可支持 1 位學童一個月的課後輔導"
    }
  ];

  const filteredItems = items.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-softGreen text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">愛心物資認購</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              您的每一份認購，都是孩子們與弱勢家庭的希望
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 shadow-sm sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-full">
                    <span className="font-bold text-secondary">${item.price}</span>
                    <span className="text-sm text-gray-600">/{item.unit}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {item.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>已認購：{item.sponsored}</span>
                      <span>目標：{item.needed}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div 
                        className="bg-secondary h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.sponsored / item.needed) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">
                      {Math.round((item.sponsored / item.needed) * 100)}% 完成
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-secondary/10 p-3 rounded-lg mb-4">
                    <div className="text-sm font-medium text-secondary mb-1">影響力</div>
                    <div className="text-sm text-gray-700">{item.impact}</div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => addToCart(item)}
                    className="w-full bg-secondary hover:bg-softGreen text-white py-3 px-4 rounded-lg font-medium transition-all duration-300"
                  >
                    💝 認購物資
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Floating Button */}
      {cartItems.length > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-white p-4 rounded-full shadow-xl"
          >
            <div className="text-center">
              <div className="text-2xl mb-1">🛒</div>
              <div className="text-sm font-bold">
                {cartItems.reduce((total, item) => total + item.quantity, 0)} 項
              </div>
              <div className="text-xs">
                ${getTotalPrice()}
              </div>
            </div>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default PurchasePage;
