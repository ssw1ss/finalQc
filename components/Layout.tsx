import React from "react";
import { Header, Footer } from "components";
import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="site__wrapper">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
