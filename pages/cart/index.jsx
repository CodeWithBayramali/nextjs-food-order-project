import Image from "next/image";
import Title from "../../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center md:flex-row flex-col">
      <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                PRODUCT
              </th>
              <th scope="col" className="py-3 px-6">
                EXTRAS
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                QUANTITY
              </th>
            </tr>
          </thead>
          <tbody>
            {carts.products.length === 0 ? (
              <tr className="bg-secondary grid place-content-center border-gray-700 text-red-500">
                <td className="py-4 font-bold">Cart Empty</td>
              </tr>
            ) : (
              carts.products.map((product) => (
                <tr
                  key={product.id}
                  className="transition-all bg-secondary border-gray-700 hover:bg-primary "
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                    <Image src="/images/f1.png" alt="" width={50} height={50} />
                    <span>{product.name}</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.extraItems.map((extras) => (
                      <span key={extras.id}>{extras.name} ,</span>
                    ))}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    ${product.price}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    1
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="bg-secondary min-h-[calc(100vh_-_333px)] flex flex-col justify-center text-white p-12 md:w-auto w-full   md:text-start !text-center">
        <Title addClass="text-[40px]">CART TOTAL</Title>

        <div className="mt-6">
          <b>Subtotal: </b>${carts.total}
          <br />
          <b className=" inline-block my-1">Discount: </b>$0.00 <br />
          <b>Total: </b>${carts.total}
        </div>
        <div>
          <button
            onClick={() => dispatch(reset())}
            className="btn-primary mt-4 md:w-auto w-52"
          >
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
