import { useEffect, useState } from "react";
import Footer from "../../layout/footers/Footer";
import Header from "../../layout/headers/Header";
import Cta from "./Cta";
import Faq from "./Faq";
import Feature from "./Feature";
import Guidance from "./Guidance";
import Hero from "./Hero";
import Launch from "./Launch";
import Process from "./Process";
import { Parallax } from "react-parallax";
import Snowfall from 'react-snowfall';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxXSnow = (mousePosition.x / window.innerWidth) * 40;
  const parallaxYSnow = (mousePosition.y / window.innerHeight) * 40;

  const parallaxXImage = (mousePosition.x / window.innerWidth) * 30;
  const parallaxYImage = (mousePosition.y / window.innerHeight) * 30 + scrollPosition / 10;

  return (
    <div 
      className="tg-ton-launchpad" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
      }}
    >
      <Snowfall
        color="#019AED"
        style={{ 
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          transform: `translate(${parallaxXSnow}px, ${parallaxYSnow}px)`
        }}
        snowflakeCount={300}
        speed={[0.1, 0.3]}
        wind={[-1, 1.5]}
        radius={[0.5, 0.5]}
        rotationSpeed={[0.5, 0.5]}
      />
      
      <div
        style={{
          backgroundImage: `url(/assets/images/bg/bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2, 
          transform: `translate(${parallaxXImage}px, ${parallaxYImage}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Content */}
      <Parallax bgImage="/assets/images/bg/bg.png" strength={500}>
        <div className="tg-header-section" style={{ position: "relative", zIndex: 2 }}>
          <Header />
          <Hero />
        </div>
        <main>
          <Launch />
          <Guidance />
          <Process />
          <Feature />
          <Cta />
          <Faq />
        </main>
      </Parallax>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
