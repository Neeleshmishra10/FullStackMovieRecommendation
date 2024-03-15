import React from 'react'
import {useNavigate} from 'react-router-dom'
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center flex-row px-10 py-4 bg-gray-200">
        <div className="f">MOVIECRITIC</div>
        <div className="flex flex-row gap-3">
            <button onClick={()=>navigate('/add-movie')} className='border-2 rounded-md  border-indigo-400 hover:text-indigo-600  p-2 px-4 text-indigo-700 font-semibold bg-slate-50'>Add new movie</button>
            <button onClick={()=>navigate('/add-review')} className='border-2 rounded-md hover:bg-indigo-600  p-2 px-4 text-gray-100 font-semibold bg-indigo-700'>Add new review</button>
        </div>
    </div>
  )
}

export default Nav