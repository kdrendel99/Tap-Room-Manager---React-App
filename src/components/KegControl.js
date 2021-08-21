import React from 'react';
import KegData from './../data/KegData';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      tapData: KegData
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToData = (newKeg) => {
    const newTapList = this.state.tapData.concat(newKeg);
    this.setState({tapData: newTapList, formVisibleOnPage: false})
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToData}/>
      buttonText = "Return to Keg list";
    }

    else{
      currentlyVisibleState = <KegList tapData = {this.state.tapData} showForm = {this.handleClick}/>;
      buttonText = "Add Keg";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;