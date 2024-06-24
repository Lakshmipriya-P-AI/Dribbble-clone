import React, {useState} from 'react';
import './Img.css';
import ImagePopup from './ImagePopup'
import Bar2 from './Bar2';

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1718662513408-721a6abb4ee8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Crying book',
    authorImage: 'https://images.unsplash.com/profile-1701295997112-19b27c81fd44image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Sander Traa',
    likes: '186',
    views: '55.7k',
    category: 'Animation',
    
  
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1690418709056-fd0f36e2eb45?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'traveling through life & catching little moments',
    authorImage: 'https://images.unsplash.com/profile-1711603776258-8239a49da2f9image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Valeriia Miller',
    likes: '122',
    views: '39.1k',
    category: 'Discover'
  },
  {
    image: 'https://images.unsplash.com/photo-1718002125249-064336b5687b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Houses illustration',
    authorImage: 'https://images.unsplash.com/photo-1490138139357-fc819d02e344?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Alexandra Zutto',
    likes: '146',
    views: '23.4k',
    category: 'Branding'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1690445150715-a59568548ba1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Nature',
    authorImage: 'https://images.unsplash.com/profile-1706811618759-2971389ba999image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Joshua Earle',
    likes: '45',
    views: '7k',
    category: 'Illustration'
  },
  {
    image: 'https://images.unsplash.com/photo-1696384036025-c7d7b7f6584d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Mars',
    authorImage: 'https://images.unsplash.com/profile-1605231947175-278944c29d78image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Javier Miranda',
    likes: '119',
    views: '18k',
    category: 'Mobile'
  },
  {
    image: 'https://images.unsplash.com/photo-1718728593403-05c597938b62?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sculptures',
    authorImage: 'https://images.unsplash.com/profile-1678376225521-2d92a3d6697bimage?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'The Cleveland Museum of Art',
    likes: '82',
    views: '13k',
    category: 'Print'
  },
  {
    image: 'https://images.unsplash.com/photo-1710389154314-b688db4cca47?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Flower',
    authorImage: 'https://images.unsplash.com/profile-1710388732528-692daf868483image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Dennis Thompson',
    likes: '97',
    views: '8.7k',
    category: 'Product Design'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1718204436526-277f9f34607c?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/profile-1688318150244-d85f465638beimage?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Andrej Lišakov',
    likes: '877',
    views: '4.6k',
    category: 'Typography'
  },
  {
    image: 'https://images.unsplash.com/photo-1650364910255-b312aa58dd0c?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/profile-1618940768691-8fe3315b8ec3image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Nikola Tasic',
    likes: '875',
    views: '4.6k',
    category: 'Web Design'
  },
  {
    image: 'https://images.unsplash.com/photo-1616359570090-054dd7bf4c93?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/profile-1717638573310-201b01f1a00bimage?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Dan Dennis',
    likes: '46k',
    views: '4.6k',
    category: 'Branding'
  },
  {
    image: 'https://images.unsplash.com/photo-1687040692177-631eaaa766dd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/profile-1687043342772-58b5fca06565?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Kajetan Sumila',
    likes: '986',
    views: '4.6k',
    category: 'Discover'
  },
  {
    image: 'https://images.unsplash.com/photo-1716845944020-9c545de1a07a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/profile-1643977757034-6cfc79b81494image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Otto Freijser',
    likes: '349',
    views: '4.6k',
    category: 'Animation',
  },
  {
    image: 'https://images.unsplash.com/photo-1658285029986-7a3251f6a0c4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/profile-1658289579153-0d5d6634c3a6image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'John Ryan Casillan',
    likes: '567',
    views: '4.6k',
    category: 'Print'
  },
  {
    image: 'https://images.unsplash.com/photo-1718852140247-acc2dc53cbc8?q=80&w=1775&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/profile-1718113448667-b086fb253bb3image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Trey Hollins',
    likes: '41',
    views: '4.6k',
    category: 'Typography'
  },
  {
    image: 'https://images.unsplash.com/photo-1717511140281-52586e5e307d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Mobile UX',
    authorImage: 'https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Horizon Enterprises',
    likes: '506',
    views: '8.5k',
    category: 'Mobile'
  
  },
  {
    image: 'https://images.unsplash.com/photo-1718978311737-84e744bad193?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beach ',
    authorImage: 'https://images.unsplash.com/photo-1621493821961-4afd7f1b267e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Laura Davis',
    likes: '546',
    views: '5.2k',
    category: 'Web Design'
  },
  {
    image: 'https://images.unsplash.com/photo-1685792568500-5dcc50eaf30f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Robot illustration',
    authorImage: 'https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Nimbus Industries',
    likes: '645',
    views: '1.25k',
    category: 'Animation',
  },
  {
    image: 'https://images.unsplash.com/photo-1696556009844-2d7ef3c3e116?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Football illustration',
    authorImage: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Michael Smith',
    likes: '375',
    views: '2.5k',
    category: 'Branding'
  },
  {
    image: 'https://images.unsplash.com/photo-1483488792196-78bedff29c21?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Bird pic',
    authorImage: 'https://plus.unsplash.com/premium_vector-1713785274963-8f16a1c52849?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Sanline Visionaries',
    likes: '203k',
    views: '141.6k',
    category: 'Product Design'
  },
  {
    image: 'https://images.unsplash.com/photo-1668911128139-4db2cc34aa5f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'street illustration',
    authorImage: 'https://images.unsplash.com/photo-1665392996886-0949d131a5da?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorName: 'Vertex Ventures',
    likes: '904',
    views: '4.6k',
    category: 'Illustration'
  },
  {
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Crying book',
    authorImage: 'https://images.unsplash.com/profile-1543845061256-e3af62fddb1d?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Francesco',
    likes: '186',
    views: '55.7k',
    category: 'Mobile',
  },
  {
    image: 'https://images.unsplash.com/photo-1574602526089-988ac5a80023?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Crying book',
    authorImage: 'https://images.unsplash.com/profile-1565090437718-b4fc7fc652f3?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Sung Jin Cho',
    likes: '186',
    views: '55.7k',
    category: 'Mobile',
  },
  {
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beach ',
    authorImage: 'https://images.unsplash.com/profile-fb-1496958592-70948ce89a7f.jpg?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Eftakher Alam',
    likes: '546',
    views: '5.2k',
    category: 'Web Design'
  },
  {
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beach ',
    authorImage: 'https://images.unsplash.com/profile-1590995584854-8f3fd95d401cimage?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Pakata Goh',
    likes: '546',
    views: '5.2k',
    category: 'Web Design'
  },
  {
    image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/profile-1661537276190-b27bf63fd940image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Getty Images',
    likes: '986',
    views: '4.6k',
    category: 'Discover'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661946305418-53f541fe8b30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric illustration',
    authorImage: 'https://images.unsplash.com/profile-1461022210352-b116c17353f6?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Austin Ban',
    likes: '986',
    views: '4.6k',
    category: 'Discover'
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Discover', 'Animation', 'Branding', 'Illustration', 'Mobile', 'Print', 'Product Design', 'Typography', 'Web Design'];

  const handleCategoryClick = (category) => {
      setSelectedCategory(category);
  };

  const filteredCards = selectedCategory === 'All' ? cards : cards.filter(card => card.category === selectedCategory);

  return (
      <div className="app">
          <Bar2 onCategoryClick={handleCategoryClick} categories={categories} selectedCategory={selectedCategory} />
          <div className="cards">
              {filteredCards.map((card, index) => (
                  <div className="card" key={index}>
                      <div className="image">
                          <ImagePopup src={card.image} alt={card.alt} />
                      </div>
                      <div className="info">
                          <div className="author">
                              <img src={card.authorImage} alt="Profile" />
                              <span>{card.authorName}</span>
                          </div>
                          <div className="stats">
                              <span>❤️{card.likes}</span>
                              <span>👁️{card.views}</span>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default App;
