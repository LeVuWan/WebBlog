import TopNav from "../../../components/Header/TopNav/TopNav";
import Stories from "../Stories/Stories";
import UserSuggestion from "../UserSuggestion/UserSuggestion";
import FeedCard from "./FeedCard/FeedCard";

const Feed = () => {
  return (
    <>
      <div
        className="w-full min-h-screen lg:w-[80%] md:w-[80%] sm:w-full lg:py-7 md:py-7 
      sm:py-4 py-3 px-3 flex items-start gap-x-20"
      >
        <div className="lg:w-[55%] md:w-full h-auto relative">
          <TopNav className="fixed top-0 w-full z-50 bg-black h-[60px]" />
          <Stories />
          <div className="w-full h-auto flex items-center justify-center mt-6">
            <div className="w-[80%] lg:w-[73%] md:w-[73%] sm:w-[80%] h-auto">
              <FeedCard></FeedCard>
            </div>
          </div>
        </div>
        <div className="w-[25%] h-auto lg:block md:hidden sm:hidden hidden">
          <UserSuggestion />
        </div>
      </div>
    </>
  );
};

export default Feed;
