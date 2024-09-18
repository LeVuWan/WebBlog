import { Link } from "react-router-dom";
import ProjectNav from "./ProjectNav/ProjectNav";
import recommendUserData from "./UserSuggstion.data";

const UserSuggestion = () => {
  return (
    <>
      <div className="w-full h-auto py-3">
        <ProjectNav></ProjectNav>
        <div className="w-full h-auto my-8">
          <div className="w-full h-auto flex items-center justify-between mb-4">
            <h6 className="text-sm text-gray-400 font-medium">
              Suggested for you
            </h6>
            <Link className="text-sm font-semibold text-gray-300 hover:text-gray-500">
              See all
            </Link>
          </div>
          {recommendUserData.map((user) => (
            <div
              className="w-full h-auto flex items-center justify-between mb-4"
              key={user.id}
            >
              <Link to="/" className="w-full h-auto flex items-center gap-x-2">
                <img
                  src={user.profileImg}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex items-start gap-y-0 flex-col">
                  <p className="text-[0.9rem] text-white font-medium mb-0">
                    {user.username}
                  </p>
                  <p className="text-xs text-gray-500 font-normal">
                    Suggested for you
                  </p>
                </div>
              </Link>
              <Link
                to="/"
                className="text-[0.855rem] text-blue-500 hover:text-gray-200"
              >
                {user.follow}
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center gap-x-[4px] flex-wrap mb-3">
            <div className="w-fit h-auto flex items-center gap-x-[4px]">
              <Link className="text-[0.8rem] font-normal text-gray-300 hover:underline">
                About
              </Link>
              <div className="w-[1.5px] h-[1.5px] bg-gray-300 rounded-full"></div>
              <Link className="text-[0.8rem] font-normal text-gray-300 hover:underline">
                Help
              </Link>
              <div className="w-[1.5px] h-[1.5px] bg-gray-300 rounded-full"></div>
              <Link className="text-[0.8rem] font-normal text-gray-300 hover:underline">
                Api
              </Link>
              <div className="w-[1.5px] h-[1.5px] bg-gray-300 rounded-full"></div>
              <Link className="text-[0.8rem] font-normal text-gray-300 hover:underline">
                Job
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSuggestion;
