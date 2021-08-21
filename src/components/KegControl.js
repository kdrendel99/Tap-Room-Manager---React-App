import React from 'react';
import KegData from './../data/KegData';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      kegDetailsVisibleOnPage: false,
      formVisibleOnPage: false,
      tapData: KegData,
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        kegDetailsVisibleOnPage: false,
        selectedKeg: null,
      });
    }
    else {
      this.setState(prevState => ({
        kegDetailsVisibleOnPage: !prevState.kegDetailsVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToData = (newKeg) => {
    const newTapList = this.state.tapData.concat(newKeg);
    this.setState({tapData: newTapList, formVisibleOnPage: false})
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.tapData.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleBuy = (keg) => {
    if (keg.remainingPints === 0) {
      return;
    }    

    const editedKeg = {...keg, remainingPints: keg.remainingPints - 1};

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
      selectedKeg: editedKeg,
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;


    if (this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingBuy = {this.handleBuy}/>
      buttonText = "Return to tap list";
    }

    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToData}/>
      buttonText = "Return to Keg list";
    }

    else{
      currentlyVisibleState = <KegList tapData = {this.state.tapData} showForm = {this.handleClick} onKegSelection = {this.handleChangingSelectedKeg}/>;
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