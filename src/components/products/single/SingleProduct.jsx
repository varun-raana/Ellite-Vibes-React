import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImageSlide from "../../../slides/ProductImageSlide";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  let URL = "https://elite-backend-1.herokuapp.com/api/products/" + id;

  useEffect(() => {
    const showProduct = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;
      console.log(result);

      if (res.status === 200 || result) {
        setTimeout(() => {
          setProduct(result);
          setLoading(false);
        }, 1200);
      }
    };

    showProduct();
  });

  return (
    <div>
      <div className=" py-24 ">
        <div className="md:max-w-[1420px] mx-auto p-4">
          {loading ? (
            <div className="h-6 rounded bg-gray-700 shadow-sm w-[96px] mt-4 animate-pulse"></div>
          ) : (
            <div className="md:text-4xl font-[600] capitalize text-blue-600">
              {product.name}
            </div>
          )}
          <div className="w-full h-full mt-5 ">
            <ProductImageSlide URL={URL} />
          </div>
          <div className="w-full flex flex-col bg-gray-50 p-5 items-start justify-center h-full mt-8">
            {loading ? (
              <div className="h-6 rounded bg-gray-900 w-full animate-pulse"></div>
            ) : (
              <div className="text-base capitalize font-[400] tracking-wider text-gray-600">
                {product.description}
              </div>
            )}
            {loading ? (
              <div className="h-6 rounded bg-gray-700 shadow-sm w-[96px] mt-4 animate-pulse"></div>
            ) : (
              <div className="mt-3 capitalize">
                <span className="font-medium">Price:</span> INR{" "}
                {parseFloat(product.price).toFixed(2)}
              </div>
            )}
            {loading ? (
              <div className="h-6 rounded bg-gray-700 shadow-sm w-[126px] mt-4 animate-pulse"></div>
            ) : (
              <div
                className={`mt-3 capitalize rounded-sm ${
                  product.status === "out of stock"
                    ? " text-red-600"
                    : " text-green-700"
                }`}>
                {product.status}
              </div>
            )}
            <div className="mt-10">
              <button className="inline-block py-2 px-4 bg-blue-600 text-white capitalize tracking-[2px] font-[500]">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
