import { useSelector } from 'react-redux'

function Footer() {
    const content = useSelector( state => state.ui.content );
  return (
    <footer className="px-[10%] flex flex-row flex-wrap justify-between items-center bg-black pt-5 pb-5">
    <p className="text-white text-xs" >{content.footer.copy}</p>
    <div className="">
      <a className="mx-10 text-white text-xs" href={content.footer.links[0].href}>{content.footer.links[0].tittle}</a>
      <a className="text-white text-xs" href={content.footer.links[1].href}>{content.footer.links[1].tittle}</a>
    </div>
  </footer>
  )
}

export default Footer;