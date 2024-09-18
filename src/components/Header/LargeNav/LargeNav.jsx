import { Link } from "react-router-dom";
import InstagramLogo from "../../../assets/instagram-clone-assets/assets/logo/instagram.png";
import InstagramIcon from "../../../assets/instagram-clone-assets/assets/logo/icon.png";
import HomeLogo from "../../../assets/instagram-clone-assets/assets/navlogo/home.png";
import SearchLogo from "../../../assets/instagram-clone-assets/assets/navlogo/search.png";
import ExploreLogo from "../../../assets/instagram-clone-assets/assets/navlogo/explore.png";
import ReelsLogo from "../../../assets/instagram-clone-assets/assets/navlogo/reel.png";
import MessagesLogo from "../../../assets/instagram-clone-assets/assets/navlogo/message.png";
import NotificationsLogo from "../../../assets/instagram-clone-assets/assets/navlogo/like.png";
import CreateLogo from "../../../assets/instagram-clone-assets/assets/navlogo/create.png";
import ThreadLogo from "../../../assets/instagram-clone-assets/assets/navlogo/threads.png";
import MoreLogo from "../../../assets/instagram-clone-assets/assets/navlogo/more.png";
import Avatar from "../../../assets/instagram-clone-assets/assets/avarta/z5840891602323_387bf6795b0133b711738aca7cf1e9b0.jpg";

const LargeNav = () => {
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
      name: "Messages",
      link: "/messages",
      icon: MessagesLogo,
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: NotificationsLogo,
    },
    {
      name: "Create",
      link: "/create",
      icon: CreateLogo,
    },
  ];

  return (
    <>
      <div className="w-full h-full relative">
        <Link to="/" className="mb-10 px-2 lg:block md:hidden sm:hidden hidden">
          <img src={InstagramLogo} alt="" className="w-28 h-auto" />
        </Link>
        <Link to="/" className="mb-10 px-2 lg:hidden md:block sm:block block">
          <img src={InstagramIcon} alt="" className="w-28 h-auto" />
        </Link>
        <div className="w-full h-auto flex items-center flex-col gap-y-2">
          <Link
            to=""
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent
            hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
          >
            <img
              src={HomeLogo}
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
              alt=""
            />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden hidden">
              Home
            </p>
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
          <Link
            to="/profile"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent
      hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
          >
            <img
              src={Avatar}
              className="w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300"
              alt=""
            />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              Profile
            </p>
          </Link>
        </div>
        <div className="w-full h-auto absolute bottom-0 left-0 px-0">
          <Link
            to=""
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent
            hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
          >
            <img
              src={ThreadLogo}
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
              alt=""
            />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden hidden">
              Thread
            </p>
          </Link>
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent
            hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
          >
            <img
              src={MoreLogo}
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
              alt=""
            />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden hidden">
              More
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
