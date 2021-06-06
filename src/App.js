import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Map from './components/Map';
import MyNFTS from './components/MyNFTS';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/map" component={Map} />
            <Route path="/my-nfts" component={MyNFTS} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
