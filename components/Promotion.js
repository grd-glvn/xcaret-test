import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/slices/uiSlice";
import Carousel from "./Carousel";

function Promotion({ swap }) {
  const content = useSelector((state) => state.ui.content);
  const dispatch = useDispatch();

  return (
    <div className="sm:flex sm:gap-4 sm:justify-center  sm:mx-[5rem] md:mx-[7rem] sm:mx-1 sm:my-5 sm:px-[1rem] md:px-0">
      <div className={`px-5 sm:px-0 w-[100%] h-[79%] flex ${swap && "order-2"}`}>
        <Carousel />
      </div>
      <div
        className={`flex flex-wrap justify-center   ${swap ? "sm:justify-end order-1" : "sm:justify-start"}`}
      >
        <img
          className="transform -translate-y-20 sm:translate-y-0 object-none"
          src={content.promotions[0].logoPromo}
          alt=""
        />
        <div
          className={`flex flex-wrap flex-col items-center sm:justify-around transform z-0 -translate-y-20 sm:translate-y-0  ${swap ? "sm:items-end" : "sm:items-start"}`}
        >
          <h1
            className={`text-3xl lg:text-4xl  mt-3 sm:my-6 sm:px-0 text-gray-700 ${swap && "sm:text-right"}`}
          >
            {content.promotions[0].title}
          </h1>
          <h2
            className={`text-xl lg:text-2xl   px-5 mt-3 sm:px-0 sm:my-6 text-gray-500 ${swap && "sm:text-right"}`}
          >
            {content.promotions[0].Subtitle}
          </h2>
          {content.promotions[0].paragraphs.map((paragraph) => {
            return (
              <p
                key={paragraph}
                className={`text-md lg:text-2xl  px-4 mt-3 sm:px-0 sm:my-6 text-gray-500 ${swap && "sm:text-right"}`}
              >
                {paragraph}
              </p>
            );
          })}
          <button
            onClick={() => dispatch(uiActions.toggleModal(true))}
            className="self-center my-6 border-[1px] rounded border-black w-[18rem] h-[3rem] font-serif text-xl hover:bg-neutral-200 "
          >
            {content.promotions[0].button.text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
