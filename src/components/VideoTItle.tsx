const VideoTItle = ({ title, overview }: { title: string; overview: string }) => {
  return (
    <div className="w-screen aspect-video text-white bg-gradient-to-r from-black/50 z-10 absolute">
      <div className="pl-4 pt-35 md:pt-0 md:pl-20 md:flex md:flex-col justify-center h-svh md:w-1/3  ">
        <h1 className="md:text-7xl font-bold md:my-3">{title}</h1>
        <p className="hidden md:inline-block text-xl "> {overview}</p>
        <div className="flex md:my-8 gap-6">
          <button className=" px-2 md:p-4 md:px-12 font-bol bg-gray-500/50 md:text-2xl"> ▶︎ Play </button>
          <button className=" hidden md:inline-block p-8 px-12 font-bold text-white text-2xl bg-black">More Info </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTItle;
