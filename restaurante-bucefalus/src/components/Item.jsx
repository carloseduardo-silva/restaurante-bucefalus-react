import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Item = ({itemInfo}) => {

    const dispatch = useDispatch()


   

    const removeItem = (id) =>{
        dispatch({
          type:'remove',
          payload:id
        })



    }

  return (
    <div id={itemInfo.id} className='menuItem'>

        <img src={itemInfo.img} alt="" />

      <div  className='itemInfos'>
          <h3>{itemInfo.name}</h3>
          <p>R${itemInfo.price}</p>
          <span onClick={() => removeItem(itemInfo.id)}> Retirar </span>
      </div>
    </div>
  )
}

export default Item
