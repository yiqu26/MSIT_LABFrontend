import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('new');

  // Hero 輪播數據
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "2024 春季志工招募",
      subtitle: "讓愛成為改變世界的力量",
      description: "加入我們的志工團隊，用你的熱忱為社會帶來正面影響",
      cta: "立即報名",
      link: "/activities"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "愛心物資認購計畫",
      subtitle: "每一份心意都能點亮希望",
      description: "認購生活必需品，直接幫助需要關懷的家庭與孩童",
      cta: "開始認購",
      link: "/purchase"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "教育支援專案",
      subtitle: "知識是改變命運的鑰匙",
      description: "支持偏鄉教育，讓每個孩子都有平等學習的機會",
      cta: "了解詳情",
      link: "/donations"
    }
  ];

  // 快速行動卡片
  const quickActions = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "志工活動",
      description: "參與各種志工服務，用行動傳遞愛心",
      participants: "本月已有 128 人參與",
      link: "/activities"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "物資認購",
      description: "認購生活必需品，直接幫助弱勢家庭",
      participants: "本月已認購 256 份物資",
      link: "/purchase"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "愛心捐贈",
      description: "捐贈你的愛心物品，讓資源再次發揮價值",
      participants: "本月已收到 89 筆捐贈",
      link: "/donations"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "聯絡我們",
      description: "有任何問題或想法，隨時與我們聯繫",
      participants: "我們隨時為您服務",
      link: "/contact"
    }
  ];

  // 最新消息橫幅
  const latestNews = {
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60",
    title: "最新消息",
    content: "2024年春季大型義賣活動即將開始！所有收益將用於偏鄉教育支援計畫。活動時間：3月15日-17日，地點：台北市信義區市政府廣場。歡迎大家共襄盛舉，一起為教育盡一份心力。"
  };

  const sortOptions = [
    { value: 'new', label: 'New' },
    { value: 'price_asc', label: 'Price ascending' },
    { value: 'price_desc', label: 'Price descending' },
    { value: 'rating', label: 'Rating' }
  ];

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // 篩選後的快速行動卡片
  const filteredActions = quickActions.filter(action =>
    action.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    action.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ scale: 1.1 }}
              animate={{ scale: index === currentSlide ? 1 : 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
              </div>
              
              {index === currentSlide && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-4xl">
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-6xl md:text-8xl font-bold mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-2xl md:text-3xl mb-6 font-light"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-lg md:text-xl mb-8 opacity-90"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <Link 
                        to={slide.link}
                        className="bg-primary hover:bg-warmOrange text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 inline-block"
                      >
                        {slide.cta}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-background py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="搜尋活動或服務..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                🔍
              </button>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                ✨ New
              </div>
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={`px-3 py-1 rounded text-sm transition-colors duration-200 ${
                    sortBy === option.value
                      ? 'text-primary font-medium'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">開始您的愛心行動</h2>
            <p className="text-lg text-gray-600">選擇適合您的參與方式，讓愛心化為實際行動</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredActions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={action.image} 
                    alt={action.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {action.description}
                  </p>
                  <div className="text-sm text-secondary mb-4 font-medium">
                    {action.participants}
                  </div>
                  <Link 
                    to={action.link}
                    className="block w-full text-center bg-primary hover:bg-warmOrange text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105"
                  >
                    立即參與
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={latestNews.image}
                  alt={latestNews.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                    最新消息
                  </span>
                  <span className="text-gray-500 text-sm">2024年02月20日</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  春季大型義賣活動即將開始
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {latestNews.content}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-primary hover:bg-warmOrange text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                    了解更多
                  </button>
                  <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                    立即參與
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">我們的成果</h2>
            <p className="text-lg text-gray-600">用數字見證愛心的力量</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1,256", label: "受助家庭", icon: "👥" },
              { number: "789", label: "志工夥伴", icon: "🤝" },
              { number: "15,432", label: "愛心物資", icon: "💝" },
              { number: "98%", label: "滿意度", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-warmOrange text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              讓愛心成為改變的起點
            </h2>
            <p className="text-2xl mb-10 leading-relaxed opacity-95">
              每一個善念都值得被實現，每一份愛心都能創造奇蹟
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link 
                  to="/login" 
                  className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 inline-block"
                >
                  立即加入我們
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 inline-block"
                >
                  了解更多
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
