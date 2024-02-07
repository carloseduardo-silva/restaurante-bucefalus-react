import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Item = ({itemInfo}) => {

    const dispatch = useDispatch()


    useEffect(() =>{
        const imgUrl = './images/' + itemInfo.img
        document.querySelector('img').src = imgUrl

    })

    const removeItem = (id) =>{
        dispatch({
          type:'remove',
          payload:id
        })



    }

  return (
    <div className='menuItem'>

        <img src='' alt="" />

      <div className='itemInfos'>
          <h3>{itemInfo.name}</h3>
          <p>R${itemInfo.price}</p>
          <span onClick={() => removeItem(itemInfo.id)}> Retirar </span>
      </div>
    </div>
  )
}

export default Item
