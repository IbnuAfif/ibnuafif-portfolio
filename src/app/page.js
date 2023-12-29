import Image from "next/image";

export default function Home() {
  return (
    <div className="my-12 bg-[#FFFBF5]">
      <div className="flex flex-row md:justify-between mx-7 md:mx-32 pt-5 text-center md:items-center">
        <span className="text-3xl font-nohemi font-bold">
          Hey There, <br /> Im Ibnu
        </span>
        <span className=" hidden md:block font-codenext ">
          I design beautiful websites, <br /> and i love what i do
        </span>
      </div>
      <div className="flex justify-center my-1 items-center">
        <Image src="/user3.png" alt="logo" width={400} height={50} className="absolute mt-0 z-50" />
        <Image src="/bg2.png" alt="logo" width={400} height={500} className="z-10 " />
      </div>
    </div>
  );
}
