import { Link } from "react-router-dom"
import launch_data from "../../data/LaunchData"

const Launch = () => {
   return (
      <div className="tg-launch-area pb-90">
         <div className="tg-launch-shape">
            <img src="/assets/images/shape/launchpad-shape.png" alt="" />
         </div>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-12">
                  <div className="tg-section-title mb-50">
                     <h2 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Why Launch With TON Launchpad?</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {launch_data.map((item)=>(
               <div key={item.id} className="col-md-6 col-lg-4 mb-30" data-sal-delay={item.data_sal_delay} data-sal="slide-up" data-sal-duration="1000">
                  <div className="tg-launch-item">
                     <div className="tg-launch-item-title mb-20">
                     <Link href="/"><h4 className="title">{item.title}</h4></Link>
                     </div>
                     <p>{item.desc}</p>
                     <div className="tg-launch-icon text-center mt-45">
                        <img src={item.img} alt="launch-icon" />
                     </div>
                  </div>
               </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Launch
