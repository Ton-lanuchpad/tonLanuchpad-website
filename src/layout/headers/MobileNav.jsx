/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import menu_data from '../../data/MenuData';

const MobileNav = ({ closeMenu }) => {
   return (
      <>
         <ul className='list-wrap navigation'>
            {menu_data.map((link) => (
               <li key={link.id}>
                  <Link to={`${link.link}`} onClick={closeMenu}>{link.title}</Link> {/* Call closeMenu when link is clicked */}
               </li>
            ))}
         </ul>
      </>
   );
};

export default MobileNav;