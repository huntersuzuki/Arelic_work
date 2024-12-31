import TopNavBar from "./TopNavBar.jsx";
import MobileMainNavBar from "./MobileMainNavBar.jsx";
import DeskTopMainNavBar from "./DeskTopMainNavBar.jsx";

const Header = () => {
  const commonNavBarClasses =
    "relative text-sm border-b md:border-0 pb-2 hover:text-[#58A42A] cursor-pointer duration-300 md:after:content-[''] md:after:block md:after:h-[2px] md:after:w-0 md:after:bg-[#58A42A] md:after:transition-all md:after:duration-300 hover:after:w-full focus:text-[#58A42A]";

  return (
    <>
      {/*Top nav bar*/}
      <div className="w-full bg-[#58A42A] h-12">
        <TopNavBar />
      </div>
      {/*Top navbar end*/}
      {/*Main navbar - mobile view*/}
      <div className="px-4 py-1">
        <MobileMainNavBar commonNavBarClasses={commonNavBarClasses} />
      </div>
      {/*Main navbar - mobile view end*/}
      {/*Main navbar - mobile desktop view*/}
      <div className={`hidden md:grid md:grid-cols-1`}>
        <DeskTopMainNavBar commonNavBarClasses={commonNavBarClasses} />
      </div>
      {/*Main navbar - mobile desktop view end*/}
    </>
  );
};

export default Header;
