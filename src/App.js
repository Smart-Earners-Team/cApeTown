import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Footer from './components/Footer';
// import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import OG from './pages/OG';
import OGs from './pages/OGs';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Router>
        {/* <NavMenu /> */}
        <ScrollToTop />
        <Switch>
          <Route path="/og">
            <OG />
          </Route>
          <Route path="/ogs">
            <OGs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}
