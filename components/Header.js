import { useSelector } from "react-redux";

function Header() {
  const content = useSelector((state) => state.ui.content);
  return (
    <header className="pt-36 pb-16 mb-10 xl:mb-[10rem]  sm:pl-[8rem] lg:pl-[15rem] xl:pl-[20rem] xl:pr-[10rem] bg-gray-300 flex items-center">
      <div className="flex flex-wrap flex-col sm:flex-row xl:flex-row justify-center items-center">
        <h1 className="my-6 text-3xl uppercase sm:basis-full sm:text-5xl xl:text-7xl xl:basis-full xl:text-start">
          {content.header.h1}
        </h1>
        <h2 className="text-3xl mb-6 sm:basis-1/2 sm:text-5xl xl:text-7xl sm:basis-1/4 text-center">
          {content.header.discount}
        </h2>
        <div className="flex flex-wrap px-5 sm:basis-1/2 sm:basis-3/4 ">
          {content.header.paragraphs.map((paragraph, index) => {
            return (
              <p key={index} className="text-md xl:text-xl text-gray-600">{paragraph}</p>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </header>
  );
}

export default Header;
