/* eslint-disable react/prop-types */
import { NavLink as Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import MobileNav from "./MobileNav";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const MobileMenu = ({ isActive, setIsActive }) => {
   const closeMenu = () => {
      setIsActive(false);
   };

   return (
      <div className={` ${isActive ? "mobile-menu-visible" : ""}`}>
         <div className="mobile-menu">
            <nav className="menu-box">
               <div onClick={closeMenu} className="close-btn"><RxCross2 /></div>
               <div className="nav-logo">
                  <Link to="/"><img src="assets/images/logo/logo.png" alt="" /></Link>
               </div>
               <div className="menu-outer">
                  <MobileNav closeMenu={closeMenu} />
               </div>
               <div className="social-links">
                  <ul className="clearfix list-wrap">
                     <li><Link href="https://x.com/thetonlaunchpad?s=21"><FaXTwitter /></Link></li>
                     <li><Link href="https://t.me/TheTonlaunchpad"><FaTelegramPlane /></Link></li>
                     <li><Link href="https://t.me/TheTonlaunch_pad"><FaTelegramPlane /></Link></li>
                  </ul>
               </div>
            </nav>
         </div>
         <div onClick={closeMenu} className="menu-backdrop"></div>
      </div>
   );
};

export default MobileMenu;