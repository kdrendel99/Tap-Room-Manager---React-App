import React from "react";
import Header from './Header';
import KegList from './KegList';

function App(){
  return (
    <React.Fragment>
      <Header/>
      <KegList/>
      <hr/>
    </React.Fragment>
  );
}

export default App;