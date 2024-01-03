import Image from "next/image";

const PortoCard = () => {
  const card = [
    {
      id: 1,
      image: <Image src="/frontend.jpg" alt="frontend" width={100} height={100} />,
      title: "FRONT END",
      desc: "React, NextJS, CSS, and HTML",
    },
    {
      id: 2,
      image: <Image src="/backend.jpg" alt="backend" width={100} height={100} />,
      title: "BACK END",
      desc: "NodeJS, ExpressJS, MySQL",
    },
  ];
  return (
    <section className="bg-white ">
      <div className="container px-6 py-16 mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold text-center capitalize lg:text-3xl">What do I help</span>
          <p className="mt-4 text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus</p>
        </div>
        <div>
          {/* Start Cards */}
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-bg-web bg-center">
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-300/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Web Developer</h2>
                <p className="mt-2 text-lg tracking-wider text-gray-700 uppercase">Full Stack Javascript</p>
              </div>
            </div>
            {/* Card */}

            {/* Card */}
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-bg-frontend">
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-300/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Front End Developer</h2>
                <p className="mt-2 text-lg tracking-wider text-gray-700 uppercase">HTML, CSS, ReactJS, and NextJS</p>
              </div>
            </div>
            {/* Card */}

            {/* Card */}
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-bg-backend">
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-300/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Back End Developer</h2>
                <p className="mt-2 text-lg tracking-wider text-gray-700 uppercase">NodeJS, ExpressJS, and MySQL</p>
              </div>
            </div>
            {/* Card */}
          </div>
          {/* End Cards */}
        </div>
      </div>
    </section>
  );
};

export default PortoCard;
