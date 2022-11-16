import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../store/slices/uiSlice';

function Promotion() {
    const content = useSelector( state => state.ui.content );
    const dispatch = useDispatch();
    
    return (
        <div className="grid grid-cols-5 gap-4 justify-center mb-[5rem] mt-[5rem] sm:mx-[5rem] md:mx-[7rem] sm:mx-1 sm:px-[1rem] md:px-[6rem]">
        <div className='flex flex-wrap content-evenly auto-rows-min col-span-2'>
          <img className="" src={content.promotions[0].logoPromo} alt="" />
          <div className='flex flex-wrap content-evenly flex-col'>
              <h1 className="title text-4xl my-6 text-gray-700">{content.promotions[0].title}</h1>
              <h2 className="subtitle text-3xl my-6 text-gray-500">{content.promotions[0].Subtitle}</h2>
              {content.promotions[0].paragraphs.map(paragraph => {
                return (
                  <p className='text-2xl my-6 text-gray-500'>{paragraph}</p>
                  )
                })
              }
              <button className='self-center my-6 border-[1px] rounded border-black w-[18rem] h-[3rem] font-serif text-xl hover:bg-neutral-200 '>{content.promotions[0].button.text}</button>
          </div>
        </div>
        <img className="justify-self-end col-span-3 w-full" src={content.promotions[0].imagePromo} alt="" />
      </div>
    )
}

export default Promotion