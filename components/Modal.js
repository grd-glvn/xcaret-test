import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { uiActions } from '../store/slices/uiSlice';
import modalData from "./assets/modalData.json"
import {randomCode} from "./assets/randomCode"

function Modal(  ) {
    const dispatch = useDispatch();
    const language = useSelector( state => state.ui.language );
    const modalIsOpen = useSelector( state => state.ui.modalIsOpen );

    if(!modalIsOpen) return null
  
    return (

       
        <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed mt-[25%] ml-[50%] transform -translate-x-1/2 -translate-y-1/2">
           
            <div className="relative w-full max-w-2xl h-full md:h-auto">

                <div className="relative bg-white rounded-lg shadow ">
                    <div className='px-10 pt-10 pb-5 text-2xl font-bold text-gray-500'>
                        { modalData[language].title } 
                    </div>
                    <div className='px-10 pt-1 pb-5 text-xl font-bold text-gray-500'>
                        { modalData[language].bookingNumber } {randomCode(10)}  
                    </div>

                    <div className='px-10 text-md font-bold text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto ullam reiciendis distinctio nihil sint facere aut asperiores provident culpa dicta nemo, ea qui odio? Quas atque quasi dolorum ducimus.
                    </div>

                    <div className="flex items-center p-6 space-x-2 rounded-b justify-center ">
                        <button onClick={()=>dispatch(uiActions.toggleModal(false))} data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-red-100 hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:bg-red-200">{ modalData[language].button[1].text}</button>
                        <button onClick={()=>dispatch(uiActions.toggleModal(false))} data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900">{ modalData[language].button[0].text}</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Modal

