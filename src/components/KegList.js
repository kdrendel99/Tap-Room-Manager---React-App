import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.tapData.map((keg) => 
      <Keg

      // Sets the selectedKeg to the ID of the keg that is passed to it
        onKegSelection = {props.onKegSelection}

      // Passes the current value of selectedKeg in state
        keg = {props.keg} 

        // Replaces the 'old' keg with the new edited one with the new decremented remaining pints value
        onClickingBuy = {props.onClickingBuy}

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