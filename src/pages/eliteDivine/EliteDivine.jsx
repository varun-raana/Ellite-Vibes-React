import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import divine from "../../img/upcomingEvent1.jpg";

function EliteDivine() {
  const emailRef = useRef();

  const URL = "https://elite-backend-1.herokuapp.com/api/subscribers";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailRef.current.value }),
      });

      const resData = await res.json();

      if (res.status === 201) {
        toast.success("we will let you know when we arrive...");
      } else {
        if (res.status === 400) {
          toast.error(resData);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error);
    }

    emailRef.current.value = "";
  };

  useEffect(() => {
    emailRef.current.focus();
  });

  return (
    <>
      <div className="overflow-hidden">
        <div className="relative">
          <div>
            <img
              src={divine}
              className="h-screen w-full block object-cover"
              alt="elite divine"
              loading="lazy"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-4 flex flex-col items-center justify-center">
            <div className="flex md:text-6xl text-4xl items-center justify-center text-center font-[800] text-white capitalize">
              we are coming soon..
            </div>
            <div className="mt-5 capitalize text-base text-gray-200 tracking-wider font-medium">
              subscribe us to know first.
            </div>
            <div className="mt-12 w-full">
              <form onSubmit={handleSubmit}>
                <div className="flex md:flex-row flex-col md:rounded-md overflow-hidden md:max-w-md mx-auto w-full bg-gray-300 backdrop-blur-md">
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="enter email"
                    className="py-3 text-base font-[500] text-gray-600 focus:border-none outline-none capitalize bg-transparent px-3 w-full"
                    required
                  />
                  <input
                    type="button"
                    value="subscribe"
                    className="py-3 text-base font-[700] cursor-pointer border-none outline-none focus:border-none capitalize px-3 bg-pink-700 text-white tracking-[3px]"
                  />
                </div>
              </form>
            </div>
            <Link
              to="/"
              className="mt-4 capitalize tracking-widest font-medium text-base text-pink-400 hover:scale-105 transition-all ease-in duration-300">
              go to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EliteDivine;
