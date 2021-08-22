import React from 'react'
import UniElement from './UniElement';

function Universities(props) {
  const unis = [];
  props.universities.forEach(uni => {
    unis.push(
      <UniElement key={uni.id} name={uni.name} fullName={uni.fullName} rating={uni.rating} route={uni.route}/>
    );
  });

  return (
    <section className="uni-wrapper">
      {unis}
    </section>
  )
}

export default Universities
