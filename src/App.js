import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import ReferDetail from "./components/pages/ReferDetail";
import Script from "./components/pages/Script";
import Youtube from "./components/pages/Youtube";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import ScrollToTop from './components/pages/scrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/reference" exact component={Reference} />
      <Route path="/refer-detail" exact component={ReferDetail} />
      <Route path="/script" exact component={Script} />
      <Route path="/youtube" exact component={Youtube} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Router>
  );
}
export default App;