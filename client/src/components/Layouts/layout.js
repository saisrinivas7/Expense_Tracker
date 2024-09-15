import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content container mt-4">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
