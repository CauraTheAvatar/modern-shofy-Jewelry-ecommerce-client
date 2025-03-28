import user_1 from '@assets/img/users/user-2.jpg';
import user_2 from '@assets/img/users/user-3.jpg';
import user_3 from '@assets/img/users/user-4.jpg';


// blog comment data 
const comment_data = [
  {
    id: 1,
    user: user_1,
    name: 'Peter Amadhila',
    date: '12 March, 2025 at 2.30pm',
    desc: 'By connecting small-scale farmers to local and international buyers, our platform helps ensure fresh Namibian produce reaches more tables while supporting local agriculture.',
    children: {
      user: user_2,
      name: 'Moses Tjiroze',
      date: '14 March, 2025 at 4.15pm',
      desc: 'This platform is a game-changer for farmers—simplifying the sales process and opening up access to new markets while ensuring fair pricing.',
    }
  },
  {
    id: 2,
    user: user_3,
    name: 'Etuna Kapenda',
    date: '18 March, 2025 at 1.45pm',
    desc: 'With reliable delivery and transparent processes, we’re helping Namibian farmers thrive while offering buyers quality products straight from the source.',
  }
]

export default comment_data;