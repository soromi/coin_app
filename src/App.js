import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./component/Nav";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import NotFound from "./pages/NotFound";

const App = () => {
  const [prevPage, setPrevPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [animateIng, setAnimateIng] = useState(false);

  useEffect(() => {
    _checkPage();
  }, []);

  const _checkPage = () => {
    switch (window.location.pathname) {
      case "/":
      case "/about":
        setCurrentPage(0);
        break;

      case "/loadmap":
        setCurrentPage(1);
        break;

      case "/trending":
        setCurrentPage(2);
        break;

      default:
        setCurrentPage(-1);
        break;
    }
  };

  const _changeCurrnetPage = n => {
    if (currentPage === n || animateIng) return;
    _page_move();
    setPrevPage(currentPage);
    setCurrentPage(n);
    setAnimateIng(true);
  };

  const _page_move = () => {
    setTimeout(() => {
      setAnimateIng(false);
    }, 1000);
  };

  return (
    <Router>
      <div className="App">
        <Nav currentPage={currentPage} animateIng={animateIng} changeCurrnetPage={_changeCurrnetPage} />
        {(animateIng && prevPage === 0) || currentPage === 0 ? <Home currentPage={currentPage} /> : null}
        {(animateIng && prevPage === 1) || currentPage === 1 ? <Page1 currentPage={currentPage} /> : null}
        {(animateIng && prevPage === 2) || currentPage === 2 ? <Page2 currentPage={currentPage} /> : null}
        {currentPage === -1 ? <NotFound /> : null}
      </div>
    </Router>
  );
};

export default App;
