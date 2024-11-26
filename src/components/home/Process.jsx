import { Link } from "react-router-dom"
import process_data from "../../data/ProcessData"

const Process = () => {
   return (
      <div className="tg-process-area mb-60">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="tg-section-title mb-50">
                     <h2 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Streamlined Launch Process</h2>
                  </div>
               </div>
            </div>

            <div className="row align-items-center">
               <div className="col-md-6 col-lg-5">
                  <div className="tg-process-right-area">
                     <div className="tg-process-title">
                        <h2 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Apply for Raise</h2>
                     </div>
                     <div className="tg-process-btn">
                        <Link to="/" className="tg-btn">Submit Form</Link>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 offset-lg-2 col-lg-5">
                  <div className="tg-process-wraper">
                     {process_data.map((item) => (
                        <div key={item.id} className="tg-process-item" data-sal-delay={item.data_sal_delay} data-sal="slide-up" data-sal-duration="1000">
                           <div className="tg-process-count">
                              <span>{item.id}</span>
                           </div>
                           <div className="tg-process-content">
                              <Link href="/"><h4 className="title mb-10">{item.title}</h4></Link>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Process
