import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const FeaturedProducts = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetch("/productImageData.json")
      .then((response) => response.json())
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const groupImages = (data, chunkSize) => {
    const groups = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      groups.push(data.slice(i, i + chunkSize));
    }
    return groups;
  };

  const slides = groupImages(imageData, 8);

  return (
    <section className="mt-48 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`md:text-[20px] tracking-[0.1rem] md:tracking-[0.2rem] flex justify-center text-gray-400`}
        >
          OUR BEST, HIGHLIGHTED FOR YOU
        </h1>
        <h1 className={`text-[20px] md:text-[36px] flex justify-center`}>
          FEATURED PRODUCTS
        </h1>
        <div className="mt-6">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {slide.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col items-center text-center"
                    >
                      <img
                        src={item.image}
                        alt="Product"
                        className="w-full h-full object-cover"
                      />
                      <p className={`mt-5`}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
