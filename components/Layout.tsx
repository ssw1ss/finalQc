import React from "react";
import { Header, Footer } from "components";
import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <title>Quality Cheese</title>
        <meta
          name="description"
          content="Quality Cheese, the finest cheeses from Switzerland"
        />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700"
          rel="stylesheet"
        />
      </Head>
      <div className="site__wrapper">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
