import React, { useState } from 'react'
import SelectElemWithRating from './SelectElemWithRating'

async function getDataAPI(uniId) {
  const delay = ms => new Promise((resolve, reject) => setTimeout(() => resolve({
    facName: 'FIOT',
    facRating: 4.1,
    depName: 'VT',
    depRating: 3.42,
    specName: '121',
    specRating: 4.29,
  }), ms));
  return await delay(1000);
}

function FacDepSpecSelector(props) {
  const [ data, setData ] = useState(undefined);

  getDataAPI(props.uni.id).then(dataApi => setData(dataApi));

  return (
    <>
      {data !== undefined ? 
        <section className="fac-dep-spec">
          <SelectElemWithRating name={data.facName} rating={data.facRating}/>
          <SelectElemWithRating name={data.depName} rating={data.depRating}/>
          <SelectElemWithRating name={data.specName} rating={data.specRating}/>
        </section> :
        <div className='lds-dual-ring'></div>}
    </>
  )
}

export default FacDepSpecSelector
