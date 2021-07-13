import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App_page_404">
      <div className="wrap_content">
        <h1 className="main_title">404 Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
