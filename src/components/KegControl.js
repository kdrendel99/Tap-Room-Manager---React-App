import React from 'react';
import KegList from './KegList';
import KegData from './../data/KegData';

class KegControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {

      tapData: KegData
    };
  }

  render(){
    let currentlyVisibleState = null;
    currentlyVisibleState = <KegList tapData = {this.state.tapData}/>;

    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default KegControl;