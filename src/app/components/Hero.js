import Image from "next/image";

export default function Hero() {
  return (
    <div className="md:mt-14 mt-4 md:px-16 w-full flex md:flex-row flex-col md:h-full items-center justify-center gap-1 bg-[#F8F7F2] font-poppins ">
      <div className="flex flex-col gap-12 w-auto md:w-1/4 pt-16 z-20">
        <div className="flex flex-col items-center md:items-start md:mt-0 md:mb-8 text-4xl md:text-5xl font-semibold md:w-auto md:tracking-wide">
          <span className="md:my-0">Hey There,</span>
          <span className="md:my-0">I&apos;m Ibnu Afif</span>
        </div>
        <span className="text-red-800 underline hidden md:block md:mt-5">ibnuafif015@gmail.com</span>
        <span className="font-bold md:block">SOFTWARE ENGINEER</span>
      </div>

      <div className="">
        <div className="bg-bg-hero bg-cover">
          <Image src="/user3.png" alt="logo" width={500} height={50} className=" " />
        </div>
      </div>
      <div className="w-1/4 pt-16 text-right hidden md:block">
        <div className="w-auto">
          <div className="flex flex-col w-[200px] text-center">
            <span>i design beautifully website</span>
            <span>and i love what i do</span>
          </div>
          <div className="mt-40 flex flex-col justify-center items-center">
            <div className="w-[75px] h-[75px] flex justify-center items-center border-[1px] rounded-full border-green-900">
              <div className="w-[68px] h-[68px] flex items-center justify-center rounded-full border-[1px] border-dashed border-green-900">
                <Image src="/purwadhika.svg" alt="logo" width={50} height={50} className="" />
              </div>
            </div>
            <div className="text-center flex flex-col pt-3 font-medium">
              <span className="text-sm tracking-tighter leading-3">CERTIFIED</span>
              <span className="text-sm ">BY PURWADHIKA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="my-12 bg-[#FFFBF5] text-center">
    //   {/* Start Text */}
    //   <div className="mx-7 md:mx-32 pt-5 flex flex-row gap-[670px] justify-center md:justify-between  text-left md:items-center z-20 absolute my-16">
    //     <div className="text-3xl font-nohemi font-bold  flex flex-col tracking-wide w-auto ">
    //       <span className="text-yellow-500 ">Hello,</span>
    //       <span className="my-1">I Am Ibnu.</span>
    //       <span className="my-1 text-[10px] text-sm">ibnuafif015@gmail.com</span>
    //       <span className="text-xl text-gray-900 font-bold my-7">Software Engineer</span>
    //     </div>
    //     <div className=" hidden md:block font-codenext h-auto w-auto mt-1">
    //       <div>
    //         I design beautiful websites, <br /> and i love what i do
    //       </div>
    //       <Image src="/Purwadhika.png" alt="logo" width={100} height={50} className="" />
    //     </div>
    //   </div>
    //   {/* End Text */}

    //   {/* Start Image */}
    //   <div className="flex flow-row justify-center my-1 items-center h-auto">
    //     <div> </div>
    //     <div>
    //       <Image src="/user3.png" alt="logo" width={400} height={50} className="absolute mt-1 z-30" />
    //       <Image src="/bg2.png" alt="logo" width={400} height={500} className="z-10 " />
    //     </div>
    //   </div>
    //   {/* End Image */}
    // </div>
  );
}
