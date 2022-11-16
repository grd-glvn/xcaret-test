import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../store/slices/uiSlice';

function Promotion() {
    const content = useSelector( state => state.ui.content );
    const dispatch = useDispatch();
    
    return (
        <div className="sm:grid sm:grid-cols-5 sm:gap-4 sm:justify-center sm:mx-[5rem] md:mx-[7rem] sm:mx-1 sm:px-[1rem] md:px-[6rem]">
        <img className="sm:justify-self-end sm:col-span-3 w-full" src={content.promotions[0].imagePromo} alt="" />
        <div className='flex flex-wrap justify-center sm:justify-start content-evenly auto-rows-min sm:col-span-2'>
            <img className="transform -translate-y-20 sm:translate-y-0" src={content.promotions[0].logoPromo} alt="" />
            <div className='flex flex-wrap items-center transform z-0 -translate-y-20 sm:translate-y-0 sm:items-start content-evenly flex-col'>
                <h1 className="text-4xl mt-3 sm:my-6 sm:px-0 text-gray-700">{content.promotions[0].title}</h1>
                <h2 className="subtitle text-3xl px-5 mt-3 sm:px-0 sm:my-6 text-gray-500">{content.promotions[0].Subtitle}</h2>
                {content.promotions[0].paragraphs.map(paragraph => {
                    return (
                    <p className='text-2xl px-4 mt-3 sm:px-0 sm:my-6 text-gray-500'>{paragraph}</p>
                    )
                    })
                }
                <button onClick={()=> dispatch(uiActions.toggleModal(true))} className='self-center my-6 border-[1px] rounded border-black w-[18rem] h-[3rem] font-serif text-xl hover:bg-neutral-200 '>{content.promotions[0].button.text}</button>
            </div>
        </div>
    </div>
    )
}

export default Promotion