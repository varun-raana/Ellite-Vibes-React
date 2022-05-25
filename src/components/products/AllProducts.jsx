import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllProducts() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://elite-backend-1.herokuapp.com/api/products";

  useEffect(() => {
    const showProducts = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;

      if (res.status === 200 || result.length > 0) {
        setTimeout(() => {
          setProduct(result);
          setLoading(false);
        }, 1500);
      }
    };

    showProducts();
  }, []);

  return (
    <>
      <div className="py-24 md:px-12 px-4 bg-gray">
        <div className="max-h-[850px] md:w-[1240px] m-auto h-full w-full p-4 overflow-y-scroll flex flex-col gap-5">
          {loading ? (
            <>
              <div className="max-w-[900px] w-full mx-auto">
                <div className="flex md:flex-row flex-col items-start justify-start w-full h-[300px] bg-white bg-opacity-30 gap-4">
                  <div className="md:w-3/4 w-full h-full bg-gray-800 animate-pulse"></div>
                  <div className="flex flex-col items-start justify-start p-4 h-full w-full">
                    <div className="h-6 rounded w-[80px] animate-pulse bg-gray-700"></div>
                    <div className="h-8 rounded w-[170px] animate-pulse bg-gray-800 mt-3"></div>
                    <div className="mt-3 h-12 rounded bg-gray-700 w-full animate-pulse"></div>
                    <div className="mt-2 h-6 w-[200px] rounded animate-pulse bg-gray-800"></div>
                  </div>
                </div>
              </div>
              <div className="max-w-[900px] w-full mx-auto">
                <div className="flex md:flex-row flex-col items-start justify-start w-full h-[300px] bg-white bg-opacity-30 gap-4">
                  <div className="md:w-3/4 w-full h-full bg-gray-800 animate-pulse"></div>
                  <div className="flex flex-col items-start justify-start p-4 h-full w-full">
                    <div className="h-6 rounded w-[80px] animate-pulse bg-gray-700"></div>
                    <div className="h-8 rounded w-[170px] animate-pulse bg-gray-800 mt-3"></div>
                    <div className="mt-3 h-12 rounded bg-gray-700 w-full animate-pulse"></div>
                    <div className="mt-2 h-6 w-[200px] rounded animate-pulse bg-gray-800"></div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            product &&
            product.length > 0 &&
            product.map((items, index) => {
              return (
                <div
                  className="max-w-[1240px] mx-auto rounded-md overflow-hidden overscroll-auto hover:overscroll-contain"
                  key={index}>
                  <div className="flex md:flex-row flex-col items-start justify-start w-full h-full bg-black bg-opacity-5 gap-4 ">
                    <div className="md:w-3/4 w-full h-full">
                      <Link to={`/products/` + items._id}>
                        <img
                          src={
                            items.image.length > 1
                              ? items.image[1]
                              : items.image[0]
                          }
                          alt={items.name}
                          className="w-full h-full object-cover block"
                        />
                      </Link>
                    </div>
                    <div className="flex flex-col items-start justify-center h-full w-full p-4">
                      <div
                        className={`uppercase inline-block items-center justify-center font-[600] text-white py-1 px-2 text-[10px] rounded-full ${
                          items.status === "out of stock"
                            ? "bg-red-600"
                            : "bg-green-600"
                        }  text-center tracking-widest`}>
                        {items.status}
                      </div>
                      <div className="mt-2 font-[500] text-justify text-blue-700">
                        INR {parseFloat(items.price).toFixed(2)}
                      </div>
                      <div className="mt-2">
                        <Link
                          to={"/products/" + items._id}
                          className="inline-block b text-xl text-justify tracking-wider font-[700] text-gray-700 hover:text-blue-700 transition-all duration-200 ease-in capitalize">
                          {items.name}
                        </Link>
                      </div>
                      <div className="mt-2 text-justify tracking-wide font-medium text-base capitalize text-gray-800 w-full">
                        {items.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
