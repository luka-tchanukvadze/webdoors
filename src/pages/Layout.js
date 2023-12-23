import React from "react";
import Navigation from "../navigation/Navigation";
import MainInfo from "../mainInfo/MainInfo";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <main>
      <Navigation />
      <MainInfo />
      <Footer />
    </main>
  );
}

export default Layout;
