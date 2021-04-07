import React from "react";
import Footer from "../../components/Footer";
import HeroBanner from "../../components/HomeComponents/Banner";
import ProductSection from "../../components/HomeComponents/ProductsSection";
import Safe from "../../components/HomeComponents/Safe";
import ShopLocalTestimony from "../../components/HomeComponents/ShopLocalTestimony";
import Support from "../../components/HomeComponents/Support";
import MenuBar from "../../components/NavBar";

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeroBanner />
        <Support />
        <Safe />
        <ProductSection />
        <ShopLocalTestimony />
        <Footer />
      </div>
    );
  }
}

export default Home;
