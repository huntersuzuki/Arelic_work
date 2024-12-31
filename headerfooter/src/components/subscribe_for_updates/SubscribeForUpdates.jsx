import React from "react";

const SubscribeForUpdates = () => {
  return (
    <>
      <section className="mt-36 h-[70vh] md:h-[60vh] bg-fixed bg-parallax bg-cover md:flex md:justify-center">
        <div className="max-w-7xl text-center lg:px-8 md:mt-28 relative top-12 md:top-0">
          <h1 className={`text-2xl text-white`}>Stay Connected</h1>
          <h1 className={`text-6xl mt-5 text-white`}>
            Subscribe Now for Updates!
          </h1>
          <div
            className={`md:items-center w-[100%] flex flex-col justify-center md:flex md:flex-row md:justify-center gap-5 mt-5 px-2`}
          >
            <input
              type="text"
              name="subscribe"
              placeholder={"Your Email Address"}
              className={`md:w-[50%] h-[8vh] outline-0 border-b bg-transparent`}
            />
            <input
              type="button"
              value="SIGN UP"
              className={`mx-auto md:mx-0 w-[45vw] h-[5vh] md:w-[15vw] bg-white`}
            />
          </div>
          {/*<Breadcrumbs items={breadcrumbItems}/>*/}
        </div>
      </section>
    </>
  );
};

export default SubscribeForUpdates;
