import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.tapData.map((keg) => 
      <Keg
        whenKegClicked = {props.onKegSelection}
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
  );
}

KegList.propTypes = {
  tapData: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;