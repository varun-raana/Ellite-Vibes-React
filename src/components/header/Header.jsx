import HeaderSwiper from "../../slides/HeaderSwiper";
function Header() {
  return (
    <div>
      <header>
        <div className=" md:max-w-5xl mx-auto w-full flex flex-col flex-wrap items-start justify-start md:items-center lg:justify-center lg:p-12 p-4 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="self-start tracking-wider font-extrabold text-white md:text-6xl capitalize">
            <span className="block md:text-9xl text-6xl font-black">
              Elite Vibes
            </span>
            <span className="ml-2 block md:text-2xl text-sm">
              Event Management Company
            </span>
          </h1>
          <p className="mt-4 p-3 lg:text-base text-sm capitalize text-justify text-white tracking-widest first-letter:text-4xl font-medium">
            EliteVibes is one of the most premier entertainment company in Pune
            that covers all aspects of entertainment such as Gaming, Live
            Concerts, Networking events, Private Parties and Holistic Festival
            Management. Get in touch with us for more details.
          </p>
        </div>
        {/* <!-- ========================= END ============================= --> */}

        {/* <!-- Swiper --> */}
      </header>
      <HeaderSwiper />
    </div>
  );
}

export default Header;
