import React from "react";
import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    appenDots: true,
    customPagging:()=> (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    )
  };

  return (
    <div>
      <div className="h-[100vh] -z-50 w-full relative -mt-[88px]">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <Slider {...settings}>

<div>
<div className="mt-64 left-0 container px-4 h-full w-full mx-auto top-52 text-white flex flex-col gap-y-5 items-start">
   <Title addClass={"font-dancing sm:text-6xl text-4xl"}>
     Fast Food Restaurant
   </Title>
   <p className="font-sans text-sm sm:w-2/5 ">
     Doloremque, itaque aperiam facilis rerum, commodi, temporibus
     sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
     ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
     ducimus libero ipsam.
   </p>
   <button className="btn-primary">Order Now</button>
 </div>
</div>

<div>
<div className="mt-64 left-0 container px-4 h-full w-full mx-auto text-white flex flex-col gap-y-5 items-start">
   <Title addClass={"font-dancing sm:text-6xl text-4xl"}>
     Buying Man
   </Title>
   <p className="font-sans text-sm sm:w-2/5 ">
     Doloremque, itaque aperiam facilis rerum, commodi, temporibus
     sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
     ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
     ducimus libero ipsam.
   </p>
   <button className="btn-primary">Order Now</button>
 </div>
</div>

<div>
<div className="mt-64 left-0 container px-4 h-full w-full mx-auto text-white flex flex-col gap-y-5 items-start">
   <Title addClass={"font-dancing sm:text-6xl text-4xl"}>
     All Restaurant
   </Title>
   <p className="font-sans text-sm sm:w-2/5 ">
     Doloremque, itaque aperiam facilis rerum, commodi, temporibus
     sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
     ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
     ducimus libero ipsam.
   </p>
   <button className="btn-primary">Order Now</button>
 </div>
</div>

</Slider>
      </div>
      
    </div>
  );
};

export default Carousel;
