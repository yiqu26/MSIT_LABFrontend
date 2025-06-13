import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../index.css'; // 確保自訂 CSS（如 .line-clamp-3）有載入

const ActivitiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: '全部活動', icon: '🌟' },
    { id: 'volunteer', name: '志工服務', icon: '🤝' },
    { id: 'education', name: '教育支援', icon: '📚' },
    { id: 'community', name: '社區關懷', icon: '🏠' },
    { id: 'environment', name: '環境保護', icon: '🌱' }
  ];

  const activities = [
    {
      id: 1,
      title: "偏鄉教育志工招募",
      category: "education",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "2024-03-15",
      time: "09:00-17:00",
      location: "新竹縣尖石鄉",
      participants: 12,
      maxParticipants: 20,
      description: "協助偏鄉學童課業輔導，需要有耐心且具備基本學科能力的志工",
      requirements: ["具備國小數學、國文基礎能力", "有耐心與愛心", "能配合週末時間"],
      status: "報名中"
    },
    {
      id: 2,
      title: "海岸淨灘環保行動",
      category: "environment",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "2024-03-20",
      time: "08:00-12:00",
      location: "新北市金山海岸",
      participants: 35,
      maxParticipants: 50,
      description: "一起守護海洋環境，清除海岸垃圾，為地球盡一份心力",
      requirements: ["自備環保手套", "穿著適合海邊活動的服裝", "自備飲用水"],
      status: "報名中"
    },
    {
      id: 3,
      title: "獨居長者關懷訪問",
      category: "community",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "2024-03-25",
      time: "14:00-16:00",
      location: "台北市萬華區",
      participants: 8,
      maxParticipants: 15,
      description: "定期探訪獨居長者，提供陪伴和基本生活協助",
      requirements: ["善於溝通", "有愛心與耐心", "能定期參與"],
      status: "報名中"
    },
    {
      id: 4,
      title: "食物銀行整理志工",
      category: "volunteer",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "2024-03-18",
      time: "13:00-17:00",
      location: "台北市中正區",
      participants: 15,
      maxParticipants: 20,
      description: "協助整理和分發食物給需要的家庭",
      requirements: ["不怕髒不怕累", "有責任感", "能搬運基本重量"],
      status: "即將額滿"
    }
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <h1 className="text-5xl font-bold mb-6">志工活動</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              參與我們的志工活動，用您的時間和熱忱為社會帶來正面改變
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-8 shadow-sm sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜尋活動..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                <div className="relative">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activity.status === '即將額滿' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm">📅 {activity.date}</div>
                    <div className="text-sm">🕒 {activity.time}</div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {activity.title}
                  </h3>
                  <div className="text-sm text-gray-600 mb-3 flex items-center">
                    <span className="mr-2">📍</span>
                    {activity.location}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
                    {activity.description}
                  </p>
                  <hr className="my-3 border-gray-200" />
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>已報名：{activity.participants} 人</span>
                      <span>總名額：{activity.maxParticipants} 人</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(activity.participants / activity.maxParticipants) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-3 flex-grow min-h-[72px]">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">參與條件：</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {activity.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-warmOrange text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 mt-6"
                    disabled={activity.participants >= activity.maxParticipants}
                  >
                    {activity.participants >= activity.maxParticipants ? '已額滿' : '立即報名'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">找不到相關活動</h3>
              <p className="text-gray-600">請嘗試其他關鍵字或選擇不同分類</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;
