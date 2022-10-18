import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-[90px] transition-all">
      <div className="container mx-auto sm:flex-row sm:flex-nowrap items-center flex-col flex flex-wrap-reverse px-4 sm:px-40 gap-20">
        <div className="w-full grid place-content-center">
        <div className="relative sm:w-[445px] sm:h-[600px] h-[300px] w-[200px]">
          <Image src="/images/about-img.png" layout="fill" />
        </div>
        </div>
        <div className="text-white gap-y-4">
          <Title addClass={"font-dancing text-[40px]"}>We are Feane</Title>
          <p className="my-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary ">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
