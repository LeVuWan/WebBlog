import { Link } from "react-router-dom";
import InstagramLogo from "../../../assets/instagram-clone-assets/assets/logo/instagram.png";
import SearchLogo from "../../../assets/instagram-clone-assets/assets/navlogo/search.png";
import LikeLogo from "../../../assets/instagram-clone-assets/assets/navlogo/like.png";

const TopNav = () => {
  return (
    <div className="w-full h-auto mb-5 lg:hidden md:hidden sm:block block fixed top-0 bg-black z-50">
      <div className="w-full h-auto flex items-center justify-between px-4 py-2">
        <Link to="/">
          <img
            src={InstagramLogo}
            alt="Instagram Logo"
            className="w-28 h-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-x-4 pe-2">
          <Link to="/">
            <img src={SearchLogo} alt="Search" className="w-6 h-6" />
          </Link>
          <Link to="/" className="relative">
            <img src={LikeLogo} alt="Messages" className="w-6 h-6" />
            <div
              className="absolute -right-2 -top-2 bg-red-600 text-sm text-white
              rounded-full w-4 h-4 flex items-center justify-center"
            ></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
