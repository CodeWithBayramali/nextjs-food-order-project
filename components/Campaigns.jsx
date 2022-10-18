import Image from "next/image";
import Title from "./ui/Title";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const CampaignsItem = (props) => {
  return (
    <div
      className="bg-secondary sm:py-7 
     sm:flex-1 sm:flex 
     items-center mb-4 sm:mb-0
    text-white rounded-xl py-5 px-[15px] sm:items-center shadow-md transition-all shadow-slate-900"
    >
      <div className="grid place-content-center rounded-full">
        <div className="hover:scale-110 transition-all">
          <Image src={props.img} alt='' width={"100%"} height={"100%"} className="rounded-full" />
        </div>
      </div>

      <div className="flex flex-col px-4 gap-y-2">
        <Title addClass={"font-dancing text-2xl"}>{props.title}</Title>
        <Title addClass={"font-dancing text-4xl"}>
          {props.discount}
          <small className="text-xs pl-1">Off</small>
        </Title>
        <Link href="/product" passHref>
        <button className="btn-primary flex items-center">
          Order Now
          <FaShoppingCart className="mx-3" />
        </button>
        </Link>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="sm:flex flex-row container justify-around mx-auto px-4 sm:px-40 py-16 sm:gap-5">
      <CampaignsItem
        img={"/images/o1.jpg"}
        title={"Tosty Thuesdays"}
        discount={"%20"}
      />
      <CampaignsItem
        img={"/images/f1.png"}
        title={"Pizza Days"}
        discount={"%40"}
      />
    </div>
  );
};

export default Campaigns;
