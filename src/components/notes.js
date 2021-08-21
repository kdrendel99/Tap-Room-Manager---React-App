console.log(newTicket.target.name.value);
console.log(newTicket.target.brand.value);
console.log(newTicket.target.price.value);
console.log(newTicket.target.type.value);
console.log(newTicket.target.alcoholContent.value);
console.log(newTicket.target.remainingPints.value);
console.log(newTicket.target.id.value);
console.log(newTicket.target.key.value);

<button disabled={keg.remainingPints === 0 ? true : false} onClick={() => onClickingBuy(keg)}>Buy now!</button>

--------------------------------------------------------------------------
        // Sets the selectedKeg to the ID of the keg that is passed to it
        onKegSelection = {props.onKegSelection}

      // Passes the current value of selectedKeg in state
        keg = {props.keg} 

        // Removes one pint, and replaces the 'old' keg with the new edited one with the new decremented remaining pints value
        onClickingBuy = {props.onClickingBuy}
--------------------------------------------------------------------------