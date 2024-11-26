import Footer from "../../layout/footers/Footer"
import Header from "../../layout/headers/Header"

const Launchpad = () => {
   return (
      <>
         <div className=" tg-main-section" style={{ backgroundImage: `url(/assets/images/bg/bg.png)` }}>
            <Header />
            <div className="tg-about-main">
               <h2>Coming Soon</h2>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Launchpad
