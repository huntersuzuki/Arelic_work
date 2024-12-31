import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import MainImageSlider from "./components/sliders/MainImageSlider.jsx";
import FeaturedCategories from "./components/featured_categories/FeaturedCategories.jsx";
import { useEffect, useState } from "react";
import FeaturedProducts from "./components/featured_products/FeaturedProducts.jsx";

function App() {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    fetch("/sliderData.json")
      .then((response) => response.json())
      .then((data) => setImageData(data));
  }, []);
  return (
    <>
      <Header />
      <MainImageSlider data={imageData} />
      <FeaturedCategories />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default App;
