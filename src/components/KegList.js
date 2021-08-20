import React from 'react';
import Keg from './Keg';
import Data from './../data/KegData';
// import propTypes from 'prop-types';

function KegList(){
  return (
    <React.Fragment>
      <hr/>
      {Data.map((keg) => 
      <Keg
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        type= {keg.type}
        alcoholContent={keg.alcoholContent}
        remainingPints={keg.remainingPints}
        id={keg.id}
        key={keg.id}/>
      )}
    </React.Fragment>
  )
}

export default KegList;