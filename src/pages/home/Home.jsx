import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/Banner";
import RowList from "../../components/rows/rowlists/RowList";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}

export default Home;
