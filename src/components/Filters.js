import React, { useState } from 'react'

const Filters = () => {
    const [selectedItem,setSelected]=useState(1)
  return (
    <section className='mt-10 py-3 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around ' >
        <button onClick={()=>{setSelected(1)}} className={`button ${selectedItem === 1 ? 'bg-green-400 text-white': 'text-slate-500'}`}>Latest</button>
        <button onClick={()=>{setSelected(2)}} className={`button ${selectedItem === 2 ? 'bg-green-400 text-white': 'text-slate-500'}`}>Best Seller</button>
        <button onClick={()=>{setSelected(3)}} className={`button ${selectedItem === 3 ? 'bg-green-400 text-white': 'text-slate-500'}`}>special</button>
    </section>

  )
}

export default Filters