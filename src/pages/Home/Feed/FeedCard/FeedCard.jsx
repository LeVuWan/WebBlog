import { Link } from "react-router-dom";
import instagramFeed from "../FeedData/FeedData";
import Ellipse from "../../../../assets/instagram-clone-assets/Icons/Ellipse/Ellipse";
import CommentedIcon from "../../../../assets/instagram-clone-assets/Icons/Comment/Comment";
import LinkIcon from "../../../../assets/instagram-clone-assets/Icons/Like/Like";
import SaveIcon from "../../../../assets/instagram-clone-assets/Icons/Save/Save";
import ShareIcon from "../../../../assets/instagram-clone-assets/Icons/Share/Share";
import Emoji from "../../../../assets/instagram-clone-assets/Icons/Emoji/Emoji";

const FeedCard = () => {
  return (
    <>
      {instagramFeed.map((feed) => (
        <div className="w-full h-auto mb-6" key={feed.id}>
          {" "}
          <div className="w-full h-auto flex items-center justify-between mb-2">
            <div className="flex items-center gap-x-2">
              <Link
                to="/"
                className="flex items-center justify-center flex-col flex-shrink-0"
              >
                <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-500">
                  <img
                    src={feed.profileImg}
                    alt=""
                    className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-x-2">
                <p className="text-white text-sm font-medium">
                  {feed.username}
                </p>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <p className="text-white text-sm font-medium">{feed.time}</p>
              </div>
            </div>
            <Ellipse />
          </div>
          <div
            className="w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] 
                 lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] 
                 md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded 
                 overflow-hidden mb-3"
          >
            <img
              src={feed.postImg}
              alt=""
              className="w-full h-full rounded object-center"
            />
          </div>
          <div className="w-full h-auto flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <LinkIcon />
              <CommentedIcon />
              <ShareIcon />
            </div>
            <SaveIcon />
          </div>
          <Link
            className="w-full h-auto flex items-center gap-x-2 text-base to-gray-200 font-medium my-2"
            to="/"
          >
            <div className="flex items-center">
              <img
                src={feed.mutualFrndImg1}
                alt=""
                className="w-5 h-5 rounded-full object-full p-[1.5px] bg-blacks"
              />
              <img
                src={feed.mutualFrndImg2}
                alt=""
                className="w-5 h-5 rounded-full object-full p-[1.5px] bg-blacks -ml-3"
              />
            </div>
            <div className="text-white">{feed.likeCount} likes</div>
          </Link>
          <div className="w-full h-auto flex items-center gap-x-1">
            <div className="w-full h-auto text-sm me-1">
              <Link to="/" className="text-white font-medium text-sm me-1">
                {feed.username}
              </Link>
              <div className="text-white">{feed.caption}</div>
              <Link to="/" className="text-gray-400 text-sm ms-1">
                More
              </Link>
            </div>
          </div>
          <div className="w-full h-auto text-sm text-gray-200 font-normal my-2">
            View all {feed.commentCount} Comments
          </div>
          <div className="w-full h-auto flex items-center justify-between border-b border-b-gray-500">
            <input
              type="text"
              name=""
              className="w-[90%] h-auto bg-transparent border-none outline-none 
              focus:outline-none text-sm text-gray-400 py-3"
              placeholder="Add comment ....."
            />
            <Emoji />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeedCard;
