import { Link } from "react-router-dom"
import guidance_data from "../../data/GuidanceData"

const Guidance = () => {
   return (
      <div className="tg-guidance-area pb-60">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="tg-section-title mb-50">
                     <h2 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">End-to-End Guidance</h2>
                  </div>
               </div>
            </div>

            <div className="row">
               {guidance_data.map((item) => (
                  <div key={item.id} className="col-lg-4" data-sal-delay={item.data_sal_delay} data-sal="slide-up" data-sal-duration="1000">
                     <div className="tg-guidance-item">
                        <div className="tg-guidance-icon">
                           <span><img src={item.icon} alt="guidance" /></span>
                        </div>
                        <div className="tg-guidance-content">
                           <Link href="/"><h4 className="tg-guidance-title mb-10">{item.title}</h4></Link>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Guidance
