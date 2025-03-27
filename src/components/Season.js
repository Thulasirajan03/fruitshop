import React, { useState } from 'react'
import FruitCard from './FruitCard'
import Divider from './Divider';

function Season() {

        const [fruits,setfruit]=useState([
                {
                  id: 1,
                  image: '7',
                  name: 'Orange',
                  price: 100
                },
                {
                  id: 2,
                  image: '2',
                  name: 'Pomegranate',
                  price: 200
                },
                {
                  id: 3,
                  image: '3',
                  name: 'Lemon',
                  price: 250
                }])

  return (
    <section className=' w-5/6 mx-auto my-10'>
        <Divider title={'Season Specials'}/>

        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
        {
            fruits.map((fruit)=>{
                return <FruitCard key={fruit.id} fruit={fruit}/>
            })
        }
    </div>
    </section>
  )
}

export default Season