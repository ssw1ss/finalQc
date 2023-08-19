import React, { useState } from "react";

import Modal from "react-modal";
import { Header, Footer, MobileMenu } from "components";
import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
  const [modalIsActive, setModalIsActive] = useState(false);
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
        <Modal
          className="ReactModal__Content"
          overlayClassName="ReactModal__Overlay"
          isOpen={modalIsActive}
          onRequestClose={() => setModalIsActive((prevState) => !prevState)}
        >
          <MobileMenu />
        </Modal>
        <Header modal={{ modalIsActive, setModalIsActive }} />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
