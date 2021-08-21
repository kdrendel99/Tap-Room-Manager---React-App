import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import KegData from './../data/KegData';

class KegControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      tapData: KegData,
      selectedKeg: null,
      kegDetailsVisibleOnPage: false,
    };
  }

  handleClick = () => {
    console.log("clicked");
    if (this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        kegDetailsVisibleOnPage: false,
      });
    }
    else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.tapData.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg,
    });
    console.log(this.state.selectedKeg);
  }

  handleAddingNewKegToData = (newKeg) => {
    const newTapList = this.state.tapData.concat(newKeg);
    this.setState({tapData: newTapList, formVisibleOnPage: false})
  }


  handleBuy = (id) => {
  const kegToEdit = this.state.tapData.filter(keg => keg.id === id)[0];

  if (kegToEdit.remainingPints === 0) {
    return;
  }

    const editedKeg = {...kegToEdit, remainingPints: kegToEdit.remainingPints - 1};

    // const kegToAddToCart = {...editedKeg};
    // const editedCartList = this.state.cartList.concat(kegToAddToCart);
    // // <Cart cartList = {this.state.cartList}/>
    // console.log(editedCartList);
    const editedKegData = this.state.tapData
      .map(currentKeg => {
        if (currentKeg.id === editedKeg.id) {
          return editedKeg;
        }
        else {
          return currentKeg;
        }
      });
    this.setState({
      tapData: editedKegData,
      // cartList: editedCartList,
      selectedKeg: null,
      editing: false
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;


    // if (this.state.selectedKeg != null){
    //   currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} availablePints = {this.getRemainingPintsText}/>
    //   buttonText = "Return to tap list";
    // }


    //DONT FORGET TO CHANGE THIS BACK TO ELSE IF. YOU COMMENTED OUT THE ONE ABOVE IT SO YOU HAD TO CHANGE THIS ONE.

    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToData}/>
      buttonText = "Return to Keg list";
    }

    else{
      currentlyVisibleState = <KegList 
      //Passing all the data
        tapData = {this.state.tapData} 
      //Sets the selectedKeg to the ID of the keg that is passed to it
        onKegSelection = {this.handleChangingSelectedKeg} 
      //Passes the current value of selectedKeg in state
        keg = {this.state.selectedKeg} 
      //Replaces the 'old' keg with the new edited one with the new decremented remaining pints value
        onClickingBuy = {this.handleBuy}/>;
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