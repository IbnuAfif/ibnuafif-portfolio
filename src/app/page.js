import Image from "next/image";

export default function Home() {
  return (
    <div className="my-14">
      <div className="flex flex-row justify-between mx-3 text-center">
        <span className="text-3xl">
          Hey There, <br /> Im Ibnu
        </span>
        <span className="sticky">
          I design beautiful websites, <br /> and i love what i do
        </span>
      </div>
      <div className="flex justify-center">
        <Image src="/user.png" alt="logo" width={250} height={50} />
      </div>
    </div>
  );
}
