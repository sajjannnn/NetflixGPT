const VideoTItle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white bg-gradient-to-r from-black/50 absolute">
      <div className=" pl-20 flex flex-col justify-center h-svh w-1/3  ">
        <h1 className="text-6xl font-bold my-3">{title}</h1>
        <p className="text-xl "> {overview}</p>
        <div className="flex my-8 gap-6">
          <button className=" p-4 px-8 font-bold bg-gray-500/30"> ▶︎ Play </button>
          <button className=" p-4 px-8 font-bold text-white bg-black">More Info </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTItle;
