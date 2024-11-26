import { Link } from "react-router-dom"

const Hero = () => {

   return (
      <div className="tg-hero-area">
         <div className="tg-hero-top">
            <div className="container custom-container-1">
               <div className="row justify-content-center">
                  <div className="col-lg-12 justify-content-center">
                     <div className="tg-hero-content">
                        <div className="tg-hero-title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">
                           <h1 className="title">Building on TON <span>Together</span></h1>
                        </div>
                        <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="1000">Join the future of Web3 and back the projects that will define tomorrow.</p>
                        <div className="tg-banner-icon text-center" data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">
                           <Link href="/"><img src="/assets/images/icons/banner-icon.png" alt="banner-icon" /></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="tg-hero-bottom">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-11">
                     <div className="tg-hero-conten-2 text-center">
                        <div className="tg-section-title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000" >
                           <h2 className="title">Unlock Your Project’s Full Potential on TON</h2>
                        </div>
                        <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="1000">TON Launchpad, we provide more than just a platform, we offer a path to success. With the strength of TON’s blockchain and our support network, we help visionary projects grow and thrive. Whether you&apos;re starting out or scaling up, TON Launchpad ensures you&apos;re backed by a global community that believes in your future.</p>
                        <div className="tg-banner-icon-2 text-center" data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">
                           <img src="/assets/images/icons/animation-icon.gif" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
