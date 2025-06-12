import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const newsItems = [
    {
      id: 1,
      title: "愛心冬衣捐贈活動開跑",
      content: "寒冬即將來臨，我們發起冬衣捐贈活動，為弱勢族群送上溫暖。",
      date: "2023-11-15",
      image: "❄️"
    },
    {
      id: 2,
      title: "偏鄉兒童文具捐贈成果",
      content: "感謝各界愛心，已成功為100位偏鄉兒童提供完整的文具用品。",
      date: "2023-11-10",
      image: "📚"
    },
    {
      id: 3,
      title: "志工培訓課程報名中",
      content: "新的一期志工培訓即將開始，歡迎有愛心的朋友們加入我們。",
      date: "2023-11-05",
      image: "🤝"
    }
  ];

  const stories = [
    {
      id: 1,
      content: "謝謝大家的幫助，讓我的孩子能夠上學讀書。",
      author: "小美媽媽",
      image: "👩"
    },
    {
      id: 2,
      content: "收到冬衣的那一刻，真的很溫暖，感謝所有的愛心人士。",
      author: "阿伯",
      image: "👴"
    },
    {
      id: 3,
      content: "志工哥哥姐姐教我讀書，我現在功課進步好多！",
      author: "小明",
      image: "👦"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/30 to-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-8xl mb-6"
            >
              ❤️
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              用愛點亮希望
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              每一份愛心都能改變世界，讓我們一起為需要幫助的人們帶來溫暖與希望
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/donate" className="btn-primary text-xl py-4 px-8 inline-block">
                🎁 立即捐贈
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NGO 簡介區 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">關於我們</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              愛心 NGO 成立於 2010 年，致力於幫助社會弱勢族群，透過物資捐贈、教育支援、
              生活輔導等方式，讓每個需要幫助的人都能感受到社會的溫暖。
              我們相信每一個小小的善舉，都能為這個世界帶來美好的改變。
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-primary mb-2">1,000+</h3>
                <p className="text-gray-600">受助家庭</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                <p className="text-gray-600">志工伙伴</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold text-primary mb-2">10,000+</h3>
                <p className="text-gray-600">愛心物資</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 最新消息 */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">最新消息</h2>
            <p className="text-lg text-gray-600">了解我們最近的活動與成果</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="text-4xl mb-4">{item.image}</div>
                <div className="text-sm text-primary font-medium mb-2">{item.date}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 感人故事牆 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">溫暖的聲音</h2>
            <p className="text-lg text-gray-600">聽聽受助朋友們的心聲</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl"
              >
                <div className="text-4xl mb-4">{story.image}</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{story.content}"
                </p>
                <div className="text-right">
                  <span className="text-primary font-medium">— {story.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-primary/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              成為愛心的傳遞者
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              您的每一份愛心都能帶來改變，加入我們，讓溫暖的力量傳遞下去
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/donate" className="btn-primary text-lg py-4 px-8">
                  開始捐贈
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <button className="btn-secondary text-lg py-4 px-8">
                  成為志工
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
