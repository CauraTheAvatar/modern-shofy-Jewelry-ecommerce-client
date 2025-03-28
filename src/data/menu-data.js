import home_1 from '@assets/img/menu/menu-home-1.jpg';
import home_2 from '@assets/img/menu/menu-home-2.jpg';
import home_3 from '@assets/img/menu/menu-home-3.jpg';
import home_4 from '@assets/img/menu/menu-home-4.jpg';

const menu_data = [
  {
    id: 1,
    homes: true,
    title: 'Home',
    link: '/',
    home_pages: [
      {
        img: home_1,
        title: 'Electronics',
        link: '/'
      },
      {
        img: home_2,
        title: 'Fashion',
        link: '/home-2'
      },
      {
        img: home_3,
        title: 'Beauty',
        link: '/home-3'
      },
      {
        img: home_4,
        title: 'Jewelry',
        link: '/home-4'
      }
    ]
  },
  {
    id: 2,
    products: true,
    title: 'Products',
    link: '/shop',
    product_pages: [
      {
        title: 'Products',
        link: '/shop',
        mega_menus: [
          { title: 'Fresh & Organic Produce', link: '/' },
          { title: 'Livestock Animal Products', link: '/' },
          { title: 'Grains, Cereal & Oilseeds', link: '/' },
          { title: 'Indigenous & Specialty Goods', link: '/' },
          { title: 'Agricultural Supplies & Saplings', link: '/' },
          { title: 'Processed Packages & Craft Goods', link: '/' },
        ]
      },
      {
        title: 'Services',
        link: '/product-details',
        mega_menus: [
          { title: 'Direct Marketplace', link: '/' },
          // { title: 'Direct Farmer-to-Buyer Platform', link: '/' },
          { title: 'Logistics Support', link: '/' },
          { title: 'Blog & Reviews', link: '/' },
        ]
      },
      {
        title: 'The Direct Market',
        link: '/shop',
        mega_menus: [
          { title: 'Shopping Cart', link: '/cart' },
          { title: 'Compare', link: '/compare' },
          { title: 'Farmer Choice', link: '/wishlist' },
          { title: 'Checkout', link: '/checkout' },
          { title: 'My account', link: '/profile' },
        ]
      },
      {
        title: 'More Pages',
        link: '/shop',
        mega_menus: [
          { title: 'Login', link: '/login' },
          { title: 'Register', link: '/register' },
          { title: 'Forgot Password', link: '/forgot' },
          { title: '404 Error', link: '/404' },
        ]
      },
    ]
  },
  {
    id: 3,
    sub_menu: true,
    title: 'Farmers Connect Market',
    link: '/shop',
    sub_menus: [
      { title: 'Shop', link: '/' },
      // { title: 'Right Sidebar', link: '/shop-right-sidebar' },
      // { title: 'Hidden Sidebar', link: '/shop-hidden-sidebar' },
    ],
  },
  // {
  //   id: 4,
  //   single_link: true,
  //   title: 'Coupons',
  //   link: '/coupon',
  // },
  {
    id: 5,
    sub_menu: true,
    title: 'Blog',
    link: '/blog',
    sub_menus: [
      // { title: 'Blog Standard', link: '/blog' },
      { title: 'Top Stories', link: '/blog-grid' },
      // { title: 'Top Stories', link: '/blog-list' },
      { title: 'Blog & Reviews', link: '/blog-details' },
      { title: 'Share Your Story', link: '/blog-details-2' },
    ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    homes: true,
    title: 'Home',
    link: '/',
    home_pages: [
      {
        img: home_1,
        title: 'Electronics',
        link: '/'
      },
      {
        img: home_2,
        title: 'Fashion',
        link: '/home-2'
      },
      {
        img: home_3,
        title: 'Beauty',
        link: '/home-3'
      },
      {
        img: home_4,
        title: 'Jewelry',
        link: '/home-4'
      }
    ]
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Products',
    link: '/shop',
    sub_menus: [
      { title: 'Shop', link: '/shop' },
      // { title: 'Right Sidebar', link: '/shop-right-sidebar' },
      // { title: 'Hidden Sidebar', link: '/shop-hidden-sidebar' },
      { title: 'Only Categories', link: '/' },
      { title: 'Direct Marketplace', link: '/product-details' },
      // { title: 'With Video', link: '/' },
      // { title: 'With Countdown Timer', link: '/' },
      // { title: 'Variations Swatches', link: '/' },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: 'The Direct Market',
    link: '/cart',
    sub_menus: [
      { title: 'Shopping Cart', link: '/cart' },
      { title: 'Compare', link: '/compare' },
      { title: 'Farm Choice', link: '/wishlist' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'My account', link: '/profile' },
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: 'More Pages',
    link: '/login',
    sub_menus: [
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
      { title: 'Forgot Password', link: '/forgot' },
      // { title: '404 Error', link: '/404' },
    ],
  },
  // {
  //   id: 4,
  //   single_link: true,
  //   title: 'Coupons',
  //   link: '/coupon',
  // },
  {
    id: 5,
    sub_menu: true,
    title: 'Blog',
    link: '/blog',
    sub_menus: [
      // { title: 'Blog Standard', link: '/blog' },
      { title: 'Top Stories', link: '/blog-grid' },
      // { title: 'Top Stories', link: '/blog-list' },
      { title: 'Blog & Reviews', link: '/blog-details' },
      { title: 'Share Your Story', link: '/blog-details-2' },
    ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]