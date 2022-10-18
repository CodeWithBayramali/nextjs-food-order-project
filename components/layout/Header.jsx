import { useState, useEffect } from "react";
import Logo from "../ui/Logo";
import {
  FaUserAlt,
  FaShoppingCart,
  FaSearch,
  FaUserCheck,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchModal from "../ui/SearchModal";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const router = useRouter();
  const cartItem = useSelector((state) => state.cart);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  return (
    <div
      className={`h-[5.5rem] sticky top-0 transition-all z-50 ${
        router.pathname === "/" && !colorChange
          ? "bg-transparent"
          : "bg-secondary"
      }`}
    >
      <div className="container px-3 mx-auto text-white flex justify-between items-center h-full">
        {/** HEADER LOGO */}
        <Logo />
        {/** SEARCH MODAL END */}

        {/** HEADER MENU */}
        <nav
          className={`sm:static absolute z-50 top-0 left-0 sm:w-auto 
          sm:text-white text-black w-full h-screen sm:h-auto sm:bg-transparent bg-white
          sm:flex hidden
          ${isMenuModal && "!grid place-content-center"}`}
        >
          <span
            onClick={() => setIsMenuModal(false)}
            className={`absolute right-10 top-10 cursor-pointer ${
              !isMenuModal && "hidden"
            }`}
          >
            <GrClose className="hover:text-primary" />
          </span>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center justify-between">
            <li
              className={`px-[5px] py[10px] uppercase hover:text-primary transition-all ${
                router.pathname === "/" && "text-primary border-b"
              }`}
            >
              <Link href="/" passHref>HOME</Link>
            </li>
            <li
              className={`px-[5px] py[10px] uppercase hover:text-primary transition-all ${
                router.pathname === "/menu" && "text-primary border-b"
              }`}
            >
              <Link href="/menu" passHref>MENU</Link>
            </li>
            <li
              className={`px-[5px] py[10px] uppercase hover:text-primary transition-all ${
                router.pathname === "/about" && "text-primary border-b"
              }`}
            >
              <Link href="/about" passHref>ABOUT</Link>
            </li>
            <li
              className={`px-[5px] py[10px] uppercase hover:text-primary transition-all ${
                router.pathname === "/reservation" && "text-primary border-b"
              }`}
            >
              <Link href="/reservation" passHref>BOOK TABLE</Link>
            </li>
          </ul>
        </nav>
        {/** SEARCH MODAL END */}

        {/** HEADER CONTENT */}
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login" passHref>
            <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
          </Link>
          <Link href="/cart" passHref>
            <span className="relative">
              <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
              {cartItem.products !== null && (
                <span className="absolute grid place-content-center text-black bg-primary text-[9px] 
                 font-bold w-[10px] h-[10px] p-[6px] -top-1 -right-2 rounded-full">
                  {cartItem.products.length === 0 ?'0':cartItem.products.length}
                </span>
              )}
            </span>
          </Link>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {/** HEADER CONTENT END */}

      {/** SEARCH MODAL */}
      {isSearchModal && <SearchModal setIsSearchModal={setIsSearchModal} />}
      {/** SEARCH MODAL END */}
    </div>
  );
};

export default Header;
