import { Link } from "react-router-dom";
import avt1 from "../../../../assets/instagram-clone-assets/assets/avarta/z5840891622703_49ec8b4d60680eb004321318ae430184.jpg";

const ProjectNav = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between">
        <Link to="/" className="w-full h-auto flex items-center gap-x-2">
          <img
            src={avt1}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex items-start gap-y-0 flex-col">
            <p className="text-[0.9rem] text-white font-medium mb-0">
              Quang Vu
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="text-[0.855rem] text-blue-500 hover:text-gray-200"
        >
          Switch
        </Link>
      </div>
    </>
  );
};

export default ProjectNav;
