// extra posts
import blog_1 from "@assets/img/blog/Blog 1 hibiscus.jpg";
import blog_2 from "@assets/img/blog/Blog 2 chili.jpg";
import blog_3 from "@assets/img/blog/Blog 3 mutete1.jpg";
// fashion
import blog_4 from '@assets/img/blog/2/blog-1.jpg';
import blog_5 from '@assets/img/blog/2/blog-2.jpg';
import blog_6 from '@assets/img/blog/2/blog-3.jpg';
// blog postbox 
import blog_post_1 from '@assets/img/blog/blog-big-3.jpg';
import blog_post_2 from '@assets/img/blog/blog-big-2.jpg';
import blog_post_3 from '@assets/img/blog/blog-big-4.jpg';
import blog_post_4 from '@assets/img/blog/blog-big-5.jpg';
import blog_post_5 from '@assets/img/blog/blog-big-6.jpg';
// blog main 
import blog_grid_1 from '@assets/img/blog/grid/Topic 1 - avocados.jpg';
import blog_grid_2 from '@assets/img/blog/grid/Topic 8 - Mopane.jpeg';
import blog_grid_3 from '@assets/img/blog/grid/Topic 3 - Marula.jpg';
import blog_grid_4 from '@assets/img/blog/grid/Topic 4 - Eembeke oil.png';
import blog_grid_5 from '@assets/img/blog/grid/Topic 6 - Routes.png';
import blog_grid_6 from '@assets/img/blog/grid/Topic 5 - Drip irrigation.jpg';
import blog_grid_7 from '@assets/img/blog/grid/Topic 7 - open market.jpg';
import blog_grid_8 from '@assets/img/blog/grid/Topic 2 - farmers.jpg';
// blog main list img 
import list_img_1 from '@assets/img/blog/grid/Topic 1 - avocados.jpg';
import list_img_2 from '@assets/img/blog/grid/Topic 8 - Mopane.jpeg';
import list_img_3 from '@assets/img/blog/grid/Topic 3 - Marula.jpg';
import list_img_4 from '@assets/img/blog/grid/Topic 4 - Eembeke oil.png';
import list_img_5 from '@assets/img/blog/grid/Topic 6 - Routes.png';
import list_img_6 from '@assets/img/blog/grid/Topic 5 - Drip irrigation.jpg';
import list_img_7 from '@assets/img/blog/grid/Topic 7 - open market.jpg';
import list_img_8 from '@assets/img/blog/grid/Topic 2 - farmers.jpg';

const blogData = [
  {
    id: 1,
    img: blog_1,
    date: "14 January, 2023",
    author: 'Agri Insights Team',
    title: "The Art of Making Mutete: A Hibiscus Flower Delicacy",
    tags: ["Indigenous Drinks", "Hibiscus", "Cultural Foods"],
    category: 'Local Cuisine',
    comments: 2,
    sm_desc: "Discover the traditional process of making Mutete, a refreshing drink made from hibiscus flowers.",
    blog: "local-cuisine",
  },
  
  {
    id: 2,
    img: blog_2,
    date: "18 February, 2023",
    author: 'Martha Uushona',
    title: "How Local Vegetables Are Transformed Into Nutritious Meals",
    tags: ["Vegetables", "Healthy Eating", "Namibian Recipes"],
    category: 'Food & Recipes',
    comments: 4,
    sm_desc: "Explore how locally grown vegetables can be turned into delicious and nutritious meals for every household.",
    blog: "food-recipes",
  },
  
  {
    id: 3,
    img: blog_3,
    date: "20 January, 2023",
    author: 'Salim Rana',
    title: "From Hibiscus to Refreshment: The Healing Benefits of Mutete",
    tags: ["Hibiscus", "Health", "Traditional Drinks"],
    category: 'Wellness & Nutrition',
    comments: 5,
    sm_desc: "Learn about the health benefits of Mutete Juice, a Namibian-born beverage made from hibiscus flowers, rich in antioxidants and vitamins.",
    blog: "wellness-nutrition",
  },

// Agricultural Blog
{
  id: 4,
  img: blog_4,
  date: "20 July, 2023",
  author: 'John Smith',
  title: "The Rise of Small-Scale Farming in Namibia: A New Hope for Local Markets",
  tags: ["Agriculture", "Small-Scale Farming", "Namibia", "Sustainability"],
  category: 'agriculture',
  comments: 6,
  sm_desc: "Small-scale farming in Namibia is gaining momentum, opening up opportunities for local farmers to thrive in global markets.",
  blog: "small-scale-farming",
},

{
  id: 5,
  img: blog_5,
  date: "18 March, 2023",
  author: 'John Smith',
  title: "How Namibian Farmers Can Tap into International Markets",
  tags: ["Agriculture", "Export", "Namibia", "Small-Scale Farming"],
  category: 'agriculture',
  comments: 3,
  sm_desc: "With the right strategies, Namibian farmers can expand their reach beyond local markets and compete globally.",
  blog: "exporting-farming-products",
},

{
  id: 6,
  img: blog_6,
  date: "15 February, 2023",
  author: 'John Smith',
  title: "Empowering Namibian Small-Scale Farmers Through Technology",
  tags: ["Agriculture", "Technology", "Small-Scale Farming", "Namibia"],
  category: 'technology',
  comments: 8,
  sm_desc: "Technology is helping small-scale farmers in Namibia increase productivity and access new markets.",
  blog: "agriculture-tech",
},

// Postbox Blog
{
  id: 7,
  img: blog_post_1,
  date: 'July 21, 2023',
  author: 'John Smith',
  comments: 2,
  tags: ["Namibia", "Agriculture", "Small-Scale Farming"],
  category: 'agriculture',
  title: 'How to Access International Markets for Namibian Agricultural Products',
  desc: 'Explore the best strategies for Namibian farmers to access international markets and create export opportunities for their produce.',
  blog: 'international-market-access'
},

{
  id: 8,
  img: blog_post_2,
  date: 'April 18, 2023',
  author: 'Mark Smith',
  comments: 5,
  tags: ["Namibia", "Agriculture", "Sustainability"],
  category: 'agriculture',
  title: 'Five Key Challenges Facing Namibian Small-Scale Farmers and How to Overcome Them',
  desc: 'Namibian farmers face unique challenges. Here’s a guide to overcoming obstacles like access to markets, funding, and technology.',
  video: true,
  video_id: '457mlqV1gzA',
  blog: 'small-farmer-challenges'
},

{
  id: 9,
  date: 'March 15, 2023',
  author: 'Shahnewaz Sakil',
  comments: 8,
  tags: ["Namibia", "Agriculture", "Export"],
  category: 'agriculture',
  title: 'Building a Sustainable Export Model for Namibian Farmers',
  desc: 'For small-scale farmers in Namibia, sustainability is key to entering global markets. Learn how to build a sustainable export model.',
  blockquote: true,
  blog: 'sustainable-export-model'
},

{
  id: 10,
  date: 'January 20, 2023',
  author: 'Salim Rana',
  comments: 10,
  tags: ["Namibia", "Agriculture", "Technology"],
  category: 'agriculture',
  title: 'How Technology is Revolutionizing Namibian Agriculture: A Glimpse into the Future',
  desc: 'From mobile apps to IoT, technology is playing a significant role in transforming agriculture in Namibia, especially for small-scale farmers.',
  audio: true,
  audio_id: 'https://www.youtube.com/embed/Jj4KbVz25oc?si=kE2rjNr9wgNuL-vF',
  blog: 'tech-in-agriculture'
},

{
  id: 11,
  slider: true,
  slider_images: [blog_post_3, blog_post_4, blog_post_5],
  date: 'February 20, 2023',
  author: 'Smith Mark',
  comments: 12,
  tags: ["Namibia", "Agriculture", "Export"],
  category: 'agriculture',
  title: 'Creating Opportunities for Small-Scale Farmers: Connecting Local Producers to International Markets',
  desc: 'The need to bridge the gap between local producers and international markets is critical for the future of small-scale farming in Namibia.',
  blog: 'connecting-local-producers'
},

  // blog grid data 
  {
    id:20,
    img:blog_grid_1,
    list_img:list_img_1,
    date:'March 25, 2025',
    author:'Agri Insights Team',
    comments:10,
    tags: ["Farm-to-Table", "Local Produce", "Agriculture"],
    category:'Farming',
    title:'From Farm to Table: The Journey of Namibian Fresh Produce',
    desc:'Explore how local farmers grow, harvest, and deliver fresh fruits, vegetables, and grains.',
    blog:'blog-grid'
  },
  {
    id:21,
    img:blog_grid_2,
    list_img:list_img_2,
    date:'March 22, 2025',
    author:'Martha Uushona',
    comments:8,
    tags: ["Indigenous Foods", "Culture", "Recipes"],
    category:'Local Cuisine',
    title:'Taste Namibia: Unique Indigenous Foods You Should Try',
    desc:'Showcase rare and traditional Namibian delicacies like mopane worms, marula oil, and mahangu.',
    blog:'blog-grid'
  },
  {
    id:22,
    img:blog_grid_3,
    list_img:list_img_3,
    date:'March 18, 2025',
    author:'Agri Insights Team',
    comments:6,
    tags: ["Smart Shopping", "Local Support", "Savings"],
    category:'Consumer Tips',
    title:'Smart Shopping: How to Support Local Farmers While Saving Money',
    desc:'Educate buyers on the economic and social benefits of purchasing from local small-scale farmers.',
    blog:'blog-grid'
  },
  {
    id:23,
    img:blog_grid_4,
    list_img:list_img_4,
    date:'March 14, 2025',
    author:'Dr. Elias Shikongo',
    comments:7,
    tags: ["Recipes", "Healthy Eating", "Local Ingredients"],
    category:'Food & Recipes',
    title:'5 Quick & Healthy Recipes Using Namibian Farm Products',
    desc:'Offer easy-to-follow recipes using products available on the platform.',
    blog:'blog-grid'
  },
  {
    id:24,
    img:blog_grid_5,
    list_img:list_img_5,
    date:'March 10, 2025',
    author:'Lukas Nghipandulwa',
    comments:9,
    tags: ["Market Insights", "Farm Prices", "Economics"],
    category:'Market Trends',
    title:'Market Insights: Understanding Real-Time Farm Prices in Namibia',
    desc:'Break down how prices are determined and why supporting local farmers provides better value.',
    blog:'blog-grid'
  },
  {
    id:25,
    img:blog_grid_6,
    list_img:list_img_6,
    date:'March 5, 2025',
    author:'Agri Insights Team',
    comments:12,
    tags: ["Farmers", "Community", "Stories"],
    category:'Profiles',
    title:'Meet the Farmers: Stories Behind the Produce You Love',
    desc:'Personalise the shopping experience by introducing farmers and their agricultural journeys.',
    blog:'blog-grid'
  },
  {
    id:26,
    img:blog_grid_7,
    list_img:list_img_7,
    date:'February 28, 2025',
    author:'Anna Kadhikwa',
    comments:11,
    tags: ["Community", "Food Security", "Small-Scale Farming"],
    category:'Community Impact',
    title:'The Power of Community: How Small-Scale Farmers are Feeding Namibia',
    desc:'Highlighting the collective effort of small-scale farmers in ensuring local food security and fostering economic growth.',
    blog:'blog-grid'
  },
  {
    id:27,
    img:blog_grid_8,
    list_img:list_img_8,
    date:'February 22, 2025',
    author:'Agri Insights Team',
    comments:13,
    tags: ["Local Produce", "Quality", "Namibian-Grown"],
    category:'Food Quality',
    title:'Why Namibian-Grown is Better: The Taste of Homegrown Quality',
    desc:'Showcasing the superior taste, quality, and health benefits of locally grown produce compared to imported goods.',
    blog:'blog-grid'
  }
];

export default blogData;
