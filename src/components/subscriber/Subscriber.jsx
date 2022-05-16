import React, { useRef } from "react";
import { toast } from "react-toastify";

function Subscriber() {
  const email = useRef();
  const URL = "https://elite-backend-1.herokuapp.com/api/subscribers";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.current.value }),
      });

      const resData = await res.json();

      if (res.status === 201) {
        toast.success("Thankyou for subscribing us.");
      } else {
        if (res.status === 400) {
          toast.error(resData);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error);
    }

    email.current.value = "";
  };

  return (
    <>
      <section className="subscribe py-32 flex flex-col gap-5" id="subscribe">
        <div className="heading text-center text-white">
          <h2 className="md:text-4xl text-4xl uppercase font-semibold tracking-widest flex items-center justify-center flex-wrap">
            Subscribe to stay informed
          </h2>
          <p className="md:text-lg text-base mt-3 font-extraLight capitalize tracking-wider">
            Shortest way to explore what will happen !
          </p>
        </div>
        <div className="p-2 mt-5">
          <form onSubmit={handleSubmit}>
            <div className="border-2 md:max-w-3xl  mx-auto flex items-center justify-between gap-2 px-0.5">
              <input
                type="email"
                name="email"
                ref={email}
                id="email"
                autoComplete="off"
                placeholder="Email Address"
                className="bg-transparent inline-block p-2 text-white placeholder-white sm:text-sm w-full focus:outline-none font-medium subscribe_input placeholder:tracking-widest "
                required
              />
              <input
                type="submit"
                className=" bg-transparent text-white inline-block p-1 cursor-pointer font-medium  tracking-wider "
                value="SUBSCRIBE !"
              />
            </div>
          </form>
        </div>
      </section>
      {/* <!-- ==================== END ======================== --> */}
    </>
  );
}

export default Subscriber;
