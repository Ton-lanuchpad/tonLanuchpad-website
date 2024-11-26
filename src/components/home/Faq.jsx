import { useEffect, useState } from 'react';
import faq_data from '../../data/FaqData';

const Faq = () => {
   const filteredFaqData = faq_data;

   const [faqData, setFaqData] = useState([]);

   useEffect(() => {
      const initialFaqData = filteredFaqData.map((faq, index) => ({
         ...faq,
         showAnswer: index === 0,
      }));
      setFaqData(initialFaqData);
   }, [filteredFaqData]);

   const toggleAnswer = (index) => {
      setFaqData((prevFaqData) => {
         const updatedFaqData = prevFaqData.map((faq, i) => ({
            ...faq,
            showAnswer: i === index ? !faq.showAnswer : false,
         }));
         return updatedFaqData;
      });
   };

   return (
      <div className="tg-faq-area mb-120">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="tg-section-title mb-50">
                     <h2 className="title">F.A.Q</h2>
                  </div>
               </div>
            </div>

            <div className="tg-faq-wrap">
               <div className="accordion" id="accordionExample">
                  {faqData.map((item, index) => (
                     <div key={item.id} className="accordion-item" data-sal-delay={item.data_sal_delay} data-sal="slide-up" data-sal-duration="1000">
                        <h2 className="accordion-header">
                           <button
                              className={`accordion-button ${item.showAnswer ? 'active' : ''}`} // Add 'active' class based on showAnswer
                              type="button"
                              onClick={() => toggleAnswer(index)}
                           >
                              {item.title}
                           </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`}>
                           <div className="accordion-body">
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Faq;
