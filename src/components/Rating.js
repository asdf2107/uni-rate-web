import React from 'react'

function Rating(props) {
  function getSrcAt(starNum) {
    const relRating = props.rating - starNum;

    if (relRating > 0.75) {
      return 'img/star.png';
    } else if (relRating >= 0.25) {
      return 'img/star-half.png';
    } else {
      return 'img/star-none.png';
    }
  }

  return (
    <table className="star-wrapper">
      <tbody>
        <tr>
          <td>
            <img className="star-image" src={getSrcAt(0)} alt=""/>
          </td>
          <td>
            <img className="star-image" src={getSrcAt(1)} alt=""/>
          </td>
          <td>
            <img className="star-image" src={getSrcAt(2)} alt=""/>
          </td>
          <td>
            <img className="star-image" src={getSrcAt(3)} alt=""/>
          </td>
          <td>
            <img className="star-image" src={getSrcAt(4)} alt=""/>
          </td>
          {(props.showNum === true || props.showNum === undefined) &&
          <td className="star-rating">
            {props.rating}
          </td>}
        </tr>
      </tbody>
    </table>
  )
}

export default Rating
