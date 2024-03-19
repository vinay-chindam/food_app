import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

    const [category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <FoodDisplay/>
    </div>
  )
}

export default Home