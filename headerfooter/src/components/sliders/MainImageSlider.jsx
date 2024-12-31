import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PropTypes from "prop-types";
const MainImageSlider = ({ data }) => {
  return (
    <>
      <section className="w-full md:mt-[1px]">
        <div className="md:h-[100vh] w-full md:flex">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop="true"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt={`dummy image`} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/*<Breadcrumbs items={breadcrumbItems} />*/}
        </div>
      </section>
    </>
  );
};
MainImageSlider.propTypes = {
  data: PropTypes.array.isRequired,
};
export default MainImageSlider;
