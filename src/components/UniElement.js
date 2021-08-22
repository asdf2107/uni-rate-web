import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function UniElement(props) {
  return (
    <Link to={props.route}>
      <div className="uni select-elem">
        <img className="uni-image" src="img/university-blank.png" alt=""/>
        <h2>{props.name}</h2>
        <h3>{props.fullName}</h3>
        <Rating rating={props.rating}/>
      </div>
    </Link>
  )
}

export default UniElement
