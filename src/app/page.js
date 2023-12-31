import Image from "next/image";

export default function Home() {
  return (
    <div className="my-12 bg-[#FFFBF5] text-center">
      {/* Start Text */}
      <div className="flex justify-center xl:justify-between mx-7 md:mx-32 pt-5 text-center md:items-center ">
        <div className="text-3xl font-nohemi font-bold  flex flex-col w-full">
          <span className="text-yellow-500">Hello,</span>
          <span>I Am Ibnu.</span>
          <span className="text-xl text-green-500 font-bold">Software Engineer</span>
        </div>

        <span className=" hidden md:block font-codenext ">
          I design beautiful websites, <br /> and i love what i do
        </span>
      </div>
      {/* End Text */}

      {/* Start Image */}
      <div className="flex flow-row justify-center my-1 items-center">
        <div>
          <Image src="/user3.png" alt="logo" width={400} height={50} className="absolute mt-0 z-50" />
          <Image src="/bg2.png" alt="logo" width={400} height={500} className="z-10 " />
        </div>
      </div>
      {/* End Image */}
    </div>
  );
}
