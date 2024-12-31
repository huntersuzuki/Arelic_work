import React from "react";
import babycare from "/public/images/baby-care.jpeg";
import haircare from "/public/images/hair-care.jpeg";
import edibleoil from "/public/images/edible-oil.jpeg";
const FeaturedCategories = () => {
  return (
    <>
      <section className="mt-12 h-[120vh] md:px-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className={`md:text-[20px] tracking-[0.1rem] md:tracking-[0.2rem] flex justify-center text-gray-400`}
          >
            DISCOVER THE BEST OF OROVITA
          </h1>
          <h1 className={`text-[20px] md:text-[36px] flex justify-center`}>
            FEATURED CATEGORIES
          </h1>
          <p
            className={`md:flex md:justify-center text-center text-[17px] mt-8`}
          >
            Orovita crafts premium, sustainable oils with innovation <br></br>{" "}
            and tradition, ensuring exceptional quality for every use.
          </p>
          <div
            className={`mt-10 flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-8`}
          >
            <div className={`overflow-hidden`}>
              <img
                src={edibleoil}
                alt="baby care oil"
                className={`hover:scale-125 duration-1000 `}
              />
            </div>
            <div className={`flex flex-col gap-8`}>
              <div className={`overflow-hidden`}>
                <img
                  src={haircare}
                  alt="baby care oil"
                  className={`hover:scale-125 duration-1000`}
                />
              </div>
              <div className={`overflow-hidden`}>
                <img
                  src={babycare}
                  alt="baby care oil"
                  className={`hover:scale-125 duration-1000`}
                />
              </div>
            </div>
            <div
              className={`w-full col-span-2 text-center bg-black text-white md:h-[7vh] h-[10vh]`}
            >
              <p className={`mt-3 tracking-[0.1rem] text-[14px]`}>
                UP TO 20% OFF THE ENTIRE STORE! MADE WITH LOVE by OROVITA
              </p>
            </div>
          </div>
          {/*<Breadcrumbs items={breadcrumbItems} />*/}
        </div>
      </section>
    </>
  );
};

export default FeaturedCategories;
