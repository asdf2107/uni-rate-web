import React from 'react'
import Rating from './Rating'

function SelectElemWithRating(props) {
  return (
    <div className="select-elem">
      <h2 className="name">{props.name}</h2>
      <Rating rating={props.rating}/>
    </div>
  )
}

export default SelectElemWithRating
