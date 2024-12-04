interface LoaderProps {
  link?: string;
}
const Loader: React.FC<LoaderProps> = ({ link }) => {
  return (
    <>
      <div className="h-screen bg-black flex mx-auto text-white font-['Outfit'] justify-center items-center ">
        <div className="flex justify-center flex-col">
          <h1 className="inline-block mx-auto font-bold text-transparent bg-gradient-to-r from-[#1F7BFD] to-[#A190FF] bg-clip-text  text-center text-[9rem] phone:text-[7rem] smallScreen:text-[4rem]">
            MEC
          </h1>
          <p className="text-center">
            <a
              href={`http://localhost:3000/${link}`}
              className="text-[1.5rem] phone:text-[1.25rem] smphone:text-[1rem] decoration-none text-white text-center"
            >
              Page not loading? Wait a second or click here or refresh
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Loader;
