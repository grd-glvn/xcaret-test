import { useSelector } from "react-redux";

function Footer() {
  const content = useSelector((state) => state.ui.content);
  return (
    <footer className="sm:px-[10%] flex flex-row flex-wrap sm:justify-between items-center justify-center bg-black pt-5 pb-5">
      <p className="text-white text-xs">{content.footer.copy}</p>
      <div className="flex gap-32 sm:gap-0 my-5">
        <a
          className="sm:mx-10 text-white text-xs order-2 sm:order-1"
          href={content.footer.links[0].href}
        >
          {content.footer.links[0].tittle}
        </a>
        <a
          className="text-white text-xs order-1 sm:order-2"
          href={content.footer.links[1].href}
        >
          {content.footer.links[1].tittle}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
