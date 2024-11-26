import { Link } from 'react-router-dom';
import NavMenu from "./NavMenu"
import UseSticky from '../../hooks/UseSticky';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {

   const [isActive, setIsActive] = useState(false);

   const { sticky } = UseSticky();

   return (
      <>
         <header>
            <div className='tg-header-area'>
               <div className="tg-header-top">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <div className="tg-header-top-text text-center">
                              <p>TON Launchpad is Now Live.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div id="sticky-header" className={`tg-header-bottom-area transparent-headers ${sticky ? "header-sticky" : ""}`}>
                  <div className="container custom-container-1">
                     <div className="row align-items-center justify-content-between">
                     <div className="col-6 col-lg-2">
                           <div className="tg-logo">
                              <Link to="/"><img src="/assets/images/svg/logo.svg" alt="logo" /></Link>
                           </div>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block">
                           <div className="tg-menu-navbar-wrap">
                              <NavMenu />
                           </div>
                        </div>
                        <div className="col-6 col-lg-2">
                           <div className="tg-header-btn d-none d-lg-block text-right">
                              <a href="https://t.me/tonlaunchpadofficial_bot" className='tg-btn'>Launchpad</a>
                           </div>
                              <div className="responsive-mobile-menu d-flex justify-content-end d-lg-none">
                                 <button onClick={() => setIsActive(true)} className="menu toggle-btn d-block d-lg-none">
                                    <FaBarsStaggered />
                                 </button>
                              </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <MobileMenu isActive={isActive} setIsActive={setIsActive} />
      </>
   )
}

export default Header
