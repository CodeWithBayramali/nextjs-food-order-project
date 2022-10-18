import Title from './ui/Title'
import Image from 'next/image'
import Slider from 'react-slick'
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io' 

const CustomerItem = ({imgSrc}) => {
    return(
        <div className="mt-5 mx-3">
        <div className="p-6 bg-secondary text-white rounded-[5px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam
          </p>
          <div className="flex flex-col mt-4">
            <span className="text-lg font-semibold">Moana Michell</span>
            <span className="text-[15px]">magna aliqua</span>
          </div>
        </div>
  
        <div
          className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0 
        flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5 "
        >
          <Image
            src={imgSrc}
            alt=""
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
      </div>
    )
}

const Customers = () => {

    function NextBtn({onClick}) {
        return(
            <button className='bg-primary absolute flex items-center rounded-full p-3 text-white mx-2 -bottom-12 left-1/2' onClick={onClick}><IoIosArrowForward /></button>
        )
    }
    function PrevBtn({onClick}) {
        return(
            <button className='bg-primary absolute flex items-center text-white rounded-full p-3 mx-2 -bottom-12 right-1/2' onClick={onClick}><IoIosArrowBack /></button>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        appenDots: true,
        arrows:true,
        nextArrow:<NextBtn />,
        prevArrow:<PrevBtn />,
        responsive:[{
            breakpoint:768,
            settings:{
                slidesToShow:1,
                arrows:false
            }
        }]
      };

  return (
    <div className="container mx-auto my-16 sm:px-40 px-4">
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
        <Slider {...settings}>
            <CustomerItem imgSrc="/images/client1.jpg" />
            <CustomerItem imgSrc="/images/client2.jpg" />
            <CustomerItem imgSrc="/images/client1.jpg" />
            <CustomerItem imgSrc="/images/client2.jpg" />
            <CustomerItem imgSrc="/images/client1.jpg" />
            <CustomerItem imgSrc="/images/client2.jpg" />
        </Slider>
    </div>
  )
}

export default Customers