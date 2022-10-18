import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GrClose } from "react-icons/gr";
import Input from "../form/Input";

const SearchModal = ({ setIsSearchModal }) => {
  return (
    <div className="searchSettings bg-secondary bg-opacity-70">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 w-[370px] h-[600px] md:w-[600px] border-2 rounded-3xl bg-white p-10 ">
            <span
              onClick={() => setIsSearchModal(false)}
              className="absolute right-7 top-7 cursor-pointer z-30"
            >
              <GrClose className="hover:text-primary" />
            </span>
            <Title addClass={"text-5xl text-center font-dancing p-5 font-bold"}>
              Search
            </Title>
            <Input iLabel="Search..." />
            <ul className="mt-10">
              <li
                className="flex items-center justify-between
                 p-2 hover:bg-primary cursor-pointer transition-all"
              >
                <div className="relative flex">
                  <Image
                    src="/images/f1.png"
                    width={48}
                    height={48}
                    alt="food.png"
                  />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default SearchModal;
