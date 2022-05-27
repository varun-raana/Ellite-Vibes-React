import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllProducts() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inStock, setInStock] = useState([]);
  const [outStock, setOutStock] = useState([]);

  const URL = "https://elite-backend-1.herokuapp.com/api/products";

  useEffect(() => {
    const showProducts = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;

      if (res.status === 200 || result.length > 0) {
        setProduct(result);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }

      let inStock = result.filter((items) => items.status === "in stock");
      let outOfStock = result.filter(
        (items) => items.status === "out of stock"
      );
      setInStock(inStock);
      setOutStock(outOfStock);
    };

    showProducts();
  }, []);

  return (
    <>
      <div className="md:py-3 md:px-10 p-4 fixed top-18 w-full bg-white z-[200] flex items-start justify-between gap-3 border-b">
        <div className="font-medium text-blue-600 tracking-wider md:text-base text-[8px] capitalize  md:py-2 md:px-3">
          total products: &nbsp;
          <span className="font-[500]">{product.length}</span>
        </div>
        <div className="font-medium text-amber-600 tracking-wider md:text-base text-[8px] capitalize  md:py-2 md:px-3">
          in Stock: &nbsp;
          <span className="font-[500]">
            {!inStock.length ? 0 : inStock.length}
          </span>
        </div>
        <div className="font-medium text-red-600 tracking-wider md:text-base text-[8px] capitalize  md:py-2 md:px-3">
          out of stock: &nbsp;
          <span className="font-[500]">
            {!outStock.length ? 0 : outStock.length}
          </span>
        </div>
        <div className="font-medium text-green-600 tracking-wider md:text-base text-[8px] capitalize  md:py-2 md:px-3">
          total sold : &nbsp;
          <span className="font-[500]">{null}</span>
        </div>
      </div>
      <div className="py-24 md:p-12">
        <div className="overflow-y-scroll flex flex-col items-center justify-between gap-5 p-2 w-full md:max-w-4xl mx-auto  m-auto mt-20 max-h-[650px]">
          {loading ? (
            <>
              <div className="max-w-[900px] w-full mx-auto h-full ">
                <div className="flex flex-row items-start justify-start w-full h-[150px] bg-white bg-opacity-30 gap-4">
                  <div className="md:w-3/4 w-full h-full bg-gray-800 animate-pulse"></div>
                  <div className="flex flex-col items-start justify-start p-4 h-full w-full">
                    <div className="h-6 rounded w-[80px] animate-pulse bg-gray-700"></div>
                    <div className="h-8 rounded w-[170px] animate-pulse bg-gray-800 mt-3"></div>
                    <div className="mt-3 h-12 rounded bg-gray-700 w-full animate-pulse"></div>
                    <div className="mt-2 h-6 w-[200px] rounded animate-pulse bg-gray-800"></div>
                  </div>
                </div>
              </div>
              <div className="max-w-[900px] w-full mx-auto h-full">
                <div className="flex flex-row  items-start justify-start w-full h-[150px] bg-white bg-opacity-30 gap-4">
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
                  className="border w-full grid grid-cols-1 items-start justify-center rounded  h-full"
                  key={index}>
                  <div className="flex items-start justify-center h-full w-full xs:flex-col">
                    <div className="w-full h-full">
                      <Link to={`/products/` + items._id} className="w-full">
                        <img
                          src={
                            items.image.length > 1
                              ? items.image[1]
                              : items.image[0]
                          }
                          alt={items.name}
                          loading="lazy"
                          className="h-full w-full object-cover block overflow-hidden"
                        />
                      </Link>
                    </div>
                    <div className="w-full h-full p-4">
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
                      <strong className="mt-2 w-full">
                        <Link
                          to={"/products/" + items._id}
                          className="inline-block b text-xl text-justify tracking-wider font-[700] text-gray-700 hover:text-blue-700 transition-all duration-200 ease-in capitalize">
                          {items.name}
                        </Link>
                      </strong>
                      <p className="mt-2 tracking-wide font-medium text-base capitalize text-gray-800 ">
                        {items.description}
                      </p>
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
