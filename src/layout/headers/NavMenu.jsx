import { NavLink as Link } from 'react-router-dom';
import menu_data from '../../data/MenuData';

const NavMenu = () => {
   return (
      <>
         <ul className='list-wrap'>
            {menu_data.map((link) => (
               <li key={link.id}>
                  <Link to={`${link.link}`}>{link.title}</Link>
               </li>
            ))}
         </ul>
      </>
   );
};

export default NavMenu;