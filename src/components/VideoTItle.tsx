const VideoTItle = ({ title, overview }: { title: string; overview: string }) => {
  return (
    <div className="aspect-video h-screen text-white bg-gradient-to-r from-black/50 z-10 absolute">
      <div className=" pl-4 md:pl-16 flex flex-col justify-center sm:h-2/3 2xl:h-screen w-1/2 ">
        <h1 className="2xl:text-7xl lg:text-4xl text-3xl font-bold md:my-3">{title}</h1>
        <p className="hidden text-sm md:inline-block md:texl-lg xl:text-xl w-1/2 lg:w-full "> {overview}</p>
        <div className="flex md:my-8 gap-6">
          <button className=" hidden sm:inline-block px-2 2xl:p-4 2xl:px-12 font-bol bg-gray-500/50 text-xl md:text-2xl"> ▶︎ Play </button>
          <button className=" hidden lg:inline-block p-2 lg:p-3 2xl:p-6 px-12 font-bold text-white text-2xl bg-black">More Info </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTItle;
