import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ItemDetail  from './components/ItemDetail';
import ItemList from './components/ItemList';

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ItemList}/>
          <Route path="/items" component={ItemList}/>
          <Route path="/items/:id" component={ItemDetail}/>
        </Switch>
      </Router>
    );
  }
}
export default App;
