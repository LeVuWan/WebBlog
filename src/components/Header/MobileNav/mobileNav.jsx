import HomeLogo from "../../../assets/instagram-clone-assets/assets/navlogo/home.png";
import SearchLogo from "../../../assets/instagram-clone-assets/assets/navlogo/search.png";
import ExploreLogo from "../../../assets/instagram-clone-assets/assets/navlogo/explore.png";
import ReelsLogo from "../../../assets/instagram-clone-assets/assets/navlogo/reel.png";
import CreateLogo from "../../../assets/instagram-clone-assets/assets/navlogo/create.png";

import { Link } from "react-router-dom";

const MobileNav = () => {
  const sidebarItems = [
    {
      name: "Search",
      link: "/search",
      icon: SearchLogo,
    },
    {
      name: "Explore",
      link: "/explore",
      icon: ExploreLogo,
    },
    {
      name: "Reels",
      link: "/reels",
      icon: ReelsLogo,
    },
    {
      name: "Create",
      link: "/create",
      icon: CreateLogo,
    },
  ];

  return (
    <>
      <div className="w-full h-auto relative">
        <div className="w-full h-auto flex items-center gap-x-2">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
          >
            <img
              src={HomeLogo}
              alt=""
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
            />
          </Link>

          {sidebarItems.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent
      hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
              >
                <img
                  src={item.icon}
                  className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
                  alt=""
                />
                <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
