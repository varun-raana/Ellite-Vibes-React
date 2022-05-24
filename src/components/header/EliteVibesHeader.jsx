function EliteVibesHeader() {
  return (
    <>
      <header className="h-full flex items-center justify-center w-full py-20 md:px-10 px-3 header ">
        <div className="flex lg:flex-row flex-col items-start justify-center h-full w-full backdrop-blur-sm gap-5 rounded-md bg-white bg-opacity-5 mt-16">
          <div className=" h-full max-w-7xl mx-auto w-full py-10 md:p-10 p-3">
            <div className="flex lg:flow-row flex-col items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-center md:leading-10 w-full h-full">
                <h1 className="lg:text-8xl md:text-7xl text-3xl w-full  font-[900] text-white capitalize tracking-widest md:text-left text-center">
                  elite vibes management company
                </h1>
              </div>
              <div className="flex items-center justify-center h-full w-full rounded-2xl overflow-hidden mt-10 bg-white bg-opacity-5">
                <p className=" text-slate-100 tracking-widest font-[300] text-justify md:text-xl text-sm md:leading-10 leading-6 capitalize py-7 px-5">
                  We Specialize In Hosting Events All Across Pune City For All
                  Age Groups. Be It A Diwali Bash, Celebrity Concerts Or A
                  Private Party- We Assist You In Everything From Location
                  Selection, Decors, Invitation Cards To Event Emcee
                  Entertainers And Also Coordinating With Third Parties. You
                  Name It, We Got It All Covered For You!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default EliteVibesHeader;
