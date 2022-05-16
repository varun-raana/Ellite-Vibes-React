import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

function Forms() {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();
  const isMounted = useRef(true);

  const URL = `https://elite-backend-1.herokuapp.com/api/contact`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name.current.value,
      email: email.current.value,
      phoneNumber: phone.current.value,
      message: message.current.value,
    };

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (res.status === 201) {
        toast.success("Thanx for your feedback");
      } else {
        if (res.status === 400) {
          toast.error(resData);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error);
    }

    name.current.value = "";
    email.current.value = "";
    phone.current.value = "";
    message.current.value = "";
  };

  useEffect(() => {
    name.current.focus();
    return () => {
      isMounted.current = false;
    };
  }, [URL]);
  return (
    <div>
      <div className="md:max-w-2xl mx-auto bg-white bg-opacity-5 rounded-md backdrop-blur-lg">
        <div className="mt-5 py-10  md:px-4">
          <div className="flex item-center justify-center text-center md:text-4xl text-2xl text-gray-400 capitalize w-full font-[800] tracking-wider">
            Feel Free To Tell Us
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 p-4 mt-5">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className=" tracking-wider text-white capitalize">
                  name
                </label>
                <input
                  type="text"
                  ref={name}
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="enter your name"
                  className=" block mt-1 py-2 px-4 bg-transparent border border-gray-400 rounded-md placeholder:text-gray-400 placeholder-shown:tracking-wider text-gray-300 focus:outline-none tracking-[2px] placeholder:capitalize "
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className=" tracking-wider text-white capitalize">
                  email
                </label>
                <input
                  type="email"
                  ref={email}
                  name="email"
                  id="email"
                  placeholder="enter your email"
                  className=" block mt-1 py-2 px-4 bg-transparent border border-gray-400 rounded-md placeholder:text-gray-400 placeholder-shown:tracking-wider text-gray-300 focus:outline-none tracking-[2px] placeholder:capitalize"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className=" tracking-wider text-white capitalize">
                  phone Number
                </label>
                <input
                  type="number"
                  ref={phone}
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="enter your phone number"
                  className=" block mt-1 py-2 px-4 bg-transparent border border-gray-400 rounded-md placeholder:text-gray-400 placeholder-shown:tracking-wider text-gray-300 focus:outline-none tracking-[2px] placeholder:capitalize "
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className=" tracking-wider text-white capitalize">
                  Message
                </label>
                <textarea
                  name="message"
                  ref={message}
                  id="message"
                  rows="7"
                  cols="30"
                  placeholder="write your message"
                  className=" block mt-1 py-2 px-4 bg-transparent border border-gray-400 rounded-md placeholder:text-gray-400 placeholder-shown:tracking-wider text-gray-300 focus:outline-none resize-y tracking-[2px] placeholder:capitalize"
                  required></textarea>
              </div>
              <button className="mt-4 inline-block p-3 bg-pink-600 text-base capitalize font-[700] tracking-wider text-white rounded-md">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forms;
