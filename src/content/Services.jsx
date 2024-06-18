function Services() {
  return (
    <div className=" text-black mx-auto w-screen rounded-[4rem] ">
      <div className=" border-[1px] border-blue-300/10 bg-gradient-to-br from-blue-300/20 to-blue-300/5 backdrop-blur rounded-[4rem] h-full w-[90vw] mx-auto ">
        <div className="px-12 py-24">
          <h1 className="text-4xl font-bold">
            Welcome to Waterly Studios—Where Ideas Flow and Identities Shine.
          </h1>{" "}
          <div className="hidden md:block">
            <p className="text-2xl pt-12">
              At Waterly, we blend sparkling creativity with transparent
              technology to elevate your brand and professional presence.
            </p>
            <p className="text-2xl">
              From captivating corporate branding to personal portfolio
              development, let us craft your next wave of digital innovation.
            </p>
          </div>
        </div>
        <div className="px-4 ">
          <ServicesGrid />
        </div>
      </div>
    </div>
  );
}

function ServicesGrid() {
  return (
    <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-3 gap-x-2 pb-4 justify-between ">
      <div className="h-[20rem] rounded-[4rem] bg-blue-600"></div>
      <div className="h-[20rem] rounded-[4rem] bg-blue-600"></div>
      <div className="h-[20rem] rounded-[4rem] bg-blue-600"></div>
    </div>
  );
}

export default Services;
