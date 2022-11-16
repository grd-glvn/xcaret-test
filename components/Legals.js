import { useSelector } from 'react-redux'

function Legals() {
    const content = useSelector( state => state.ui.content );
    
  return (
    <div  className="mt-16 bg-gray-200 grid grid-cols-5">
    <p className='pl-28 py-10 col-span-3 text-sm' dangerouslySetInnerHTML={{__html:content.legals}}></p>
    </div>
  )
}

export default Legals