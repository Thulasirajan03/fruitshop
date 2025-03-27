import React from 'react'

function FruitCard({fruit}) {
  return (
    <div className='rounded-2xl overflow-hidden shadow-lg group transform hover:scale-110 duration-100 relative'>
        <img src={require(`../assests/${fruit.image}.jpeg`)} alt={`${fruit.image}`} className='w-full h-52 object-cover'/>
        <div className='flex flex-col items-center my-2 p-2'> <span className='font-Poppins text-slate-500 block'>{fruit.name}</span>
         <span className='font-Poppins text-slate-500'>₹{fruit.price}</span>
         <span className='font-Poppins text-lime-500 uppercase text-sm invisible group-hover:visible' >Add to Cart</span>
         </div>
         <span className='absolute top-3 right-3 bg-sky-300 text-white rounded-lg border-sky-300 p-1 text-sm'>1% off</span>
    </div>
  )
}

export default FruitCard