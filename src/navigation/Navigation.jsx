import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import Home from '../pages/Home';
import About from '../pages/About';
import Guidance from '../pages/Guidance';
import Launchpad from '../pages/Launchpad';
import ApplyForRaise from '../pages/ApplyForRaise';
import Docs from '../pages/Docs';
import EndToEnd from '../pages/EndToEnd';
import Contact from '../pages/Contact';
import Launchprocess from '../pages/LaunchProcess';

const AppNavigation = () => {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/guidance" element={<Guidance />}></Route>
          <Route exact path="/launchpad" element={<Launchpad />}></Route>
          <Route exact path="/launch-process" element={<Launchprocess />}></Route>
          <Route exact path="/apply-for-raise" element={<ApplyForRaise />}></Route>
          <Route exact path="/docs" element={<Docs />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/end-to-end" element={<EndToEnd />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppNavigation;