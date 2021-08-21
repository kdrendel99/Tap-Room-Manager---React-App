import React from 'react';
import Keg from './Keg';
import propTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.tapData.map((keg) => 
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

KegList.propTypes = {
  tapData: propTypes.array
};

export default KegList;