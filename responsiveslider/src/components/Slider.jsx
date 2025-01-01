import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Slider = () => {
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        fetch("/imageData.json")
            .then((response) => response.json())
            .then((data) => {

                if (data.length <3) {
                    const duplicates = [...data, ...data];
                    setImageData(duplicates);
                } else {
                    setImageData(data);
                }
            })
            .catch((error) => console.error("Error fetching image data:", error));
    }, []);


    return (
        <div className="relative w-full h-full">

            <button
                className="absolute top-1/2 left-4 text-8xl z-10 text-white  -translate-y-1/2 custom-prev"
                aria-label="Previous Slide"
            >
                &#8249;
            </button>
            <button
                className="absolute top-1/2 right-4 text-8xl z-10 text-white -translate-y-1/2 custom-next"
                aria-label="Next Slide"
            >
                &#8250;
            </button>

            <Swiper
                modules={[Navigation,EffectFade]}
                spaceBetween={0}
                effect={'fade'}
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                loop={imageData.length>1}
                pagination={{ clickable: true }}
                className="lg:h-[100vh] md:h-[75vh] sm:h-[50vh] h-[55vh] duration-300"
            >
                {imageData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="w-full h-full">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
