import React from 'react'

function Comment(props) {
  return (
    <div className="comment">
      <h2>{props.author}</h2>
      <p>{props.text}</p>
      <Rating rating={props.rating} showNum={false}/>
    </div>
  )
}

export default Comment
