import React from "react";
import Image from "next/image";
import Title from "../ui/Title";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const MenuItem = () => {
  return (
    <Link href='/product' passHref>
    <div className="bg-secondary flex flex-col items-center rounded-3xl shadow-md hover:shadow-slate-900 transition-all">
      <div className="grid place-content-center h-[215px] w-[100%] bg-[#f1f2f3] rounded-bl-[46px] rounded-t-2xl">
        <div className="hover:scale-110 transition-all">
        <Image src="/images/f1.png" alt="" width={"100%"} height={"100%"} />
        </div>
      </div>
      <div className="p-[25px] text-white">
        <Title addClass={"text-3xl font-semibold"}>Delicious Pizza</Title>
        <p>
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
      </div>
      <div className="flex justify-between items-center w-full p-[25px] text-white">
        <span>$20</span>
        <button className="btn-primary rounded-full w-10 h-10 !p-0 grid place-content-center">
          <FaShoppingCart />
        </button>
      </div>
    </div>
    </Link>
  );
};

export default MenuItem;
