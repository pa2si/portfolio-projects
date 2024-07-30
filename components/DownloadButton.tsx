import { IoCloudDownloadOutline } from "react-icons/io5";

const DownloadButton = () => {
  return (
    <div className="flex gap-3">
      <p className="">Download CV</p>
      <button className="my-auto text-xl text-primary-content transition-all duration-200 ease-in-out hover:text-slate-400">
        <a href="/CV_Pascal Morgan_2024-07-30_EN.pdf" download>
          <IoCloudDownloadOutline />
        </a>
      </button>
    </div>
  );
};
export default DownloadButton;
