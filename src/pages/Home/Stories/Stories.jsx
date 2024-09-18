import { Link } from "react-router-dom";
import avater1 from "../../../assets/instagram-clone-assets/assets/avarta/z5840891602323_387bf6795b0133b711738aca7cf1e9b0.jpg";
import avater2 from "../../../assets/instagram-clone-assets/assets/avarta/z5840891622703_49ec8b4d60680eb004321318ae430184.jpg";
import avater3 from "../../../assets/instagram-clone-assets/assets/avarta/z5840891631090_d940d1ad10299ae9931ebf98ea04a8b7.jpg";
import avater4 from "../../../assets/instagram-clone-assets/assets/avarta/z5840891656415_64cee2f1ea1d4edac16c464a11b63a17.jpg";
import avater5 from "../../../assets/instagram-clone-assets/assets/avarta/z5840891662383_02dfa671e8893281093ec41b3a1effdf.jpg";

const Stories = () => {
  const storiesData = [
    {
      id: 1,
      username: "Van A",
      imageUrl: avater1,
    },
    {
      id: 2,
      username: "Van B",
      imageUrl: avater2,
    },
    {
      id: 3,
      username: "Van C",
      imageUrl: avater3,
    },
    {
      id: 4,
      username: "Van D",
      imageUrl: avater4,
    },
    {
      id: 5,
      username: "Van H",
      imageUrl: avater5,
    },
  ];

  return (
    <>
      <div className="lg:max-w-[41vw] md:max-w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-hidden max-md:mt-[60px]">
        <Link
          to="/"
          key={1}
          className="flex items-center justify-center flex-col flex-shrink-0"
        >
          <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-500">
            <img
              src={avater3}
              alt=""
              className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
            />
          </div>
          <p className="text-white">Quang Vu</p>
        </Link>
        {storiesData.map((story) => (
          <Link
            to="/"
            key={story.id}
            className="flex items-center justify-center flex-col flex-shrink-0"
          >
            <div className="w-16 h-16  rounded-full object-cover p-[2px] bg-gradient-to-r from-pink-500 to-[#ff6f48]">
              <img
                src={story.imageUrl}
                alt=""
                className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
              />
            </div>
            <p className="text-white">{story.username}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Stories;
