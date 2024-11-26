import { HelmetProvider } from 'react-helmet-async';
import AppNavigation from './navigation/Navigation';
import AOS from "aos";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      
        <AppNavigation />
     
    </>
  );
}

export default App;
