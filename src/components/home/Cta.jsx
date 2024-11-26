import { Link } from "react-router-dom"

const Cta = () => {
   return (
      <div className="tg-cta-area mb-120 pt-90">
         <div className="tg-cta-shape">
            <img src="/assets/images/shape/cta-shape.png" alt="" />
         </div>
         <div className="container">
            <div className="tg-cta-bg" style={{ backgroundImage: `url(/assets/images/bg/cta-bg.png)` }}>
               <div className="ct-bg-overlay"></div>
               <div className="row align-items-center">
                  <div className="col-lg-4" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">
                     <div className="tg-cta-icon">
                        <img src="/assets/images/others/cta-img.png" alt="" />
                     </div>
                  </div>
                  <div className="col-lg-8" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1000">
                     <div className="tg-cta-content">
                        <h2 className="tg-cta-title">
                           Get Involved Now & <span>Shape the future with Us</span>
                        </h2>
                        <div className="tg-cta-btn mt-30">
                           <Link href="/" className="tg-btn">Join Community Group</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cta
