import { useSelector } from 'react-redux'

function Header() {
    const content = useSelector( state => state.ui.content );
    return (
    <header className='py-10 h-[38rem] bg-gray-300 w-full flex items-center mb-[10rem]'>
    <div className="flex flex-wrap justify-center items-center">
      <h1 className='text-7xl h-50 my-6 basis-3/4'>{content.header.h1}</h1>
      <div className='flex justify-center items-center'>
        <h2 className='text-5xl  basis-1/4 p-5 text-center'>{content.header.discount}</h2>
        <div className="flex flex-wrap basis-1/2">
          {content.header.paragraphs.map(paragraph => {
            return (
                <p className='text-3xl text-gray-600'>{paragraph}</p>
          )
          })
          }
        </div>
      </div>
    </div>
  </header>


  )
}

export default Header