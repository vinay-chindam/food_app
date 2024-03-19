import React, { useState } from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
    
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam possimus adipisci totam facilis. Id expedita illo recusandae quasi, aliquam eveniet sequi accusantium veritatis enim dolorem voluptatibus ab, autem laborum aut.</p>

        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div  key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name ?"active" :""} onClick={()=>{setCategory(prev=>prev===item.menu_name ?"All" :item.menu_name)}} src={item.menu_image} alt="" />
                          <p className='explore-menu-text'>{item.menu_name}</p>  
                        </div>
                    )
                })
            }
        </div>
        <hr />



    </div>
  )
}

export default Exploremenu