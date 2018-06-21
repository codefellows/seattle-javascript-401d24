import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Items from './items/items.js';
import Home from './home/home.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';

import '../style/app.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header title="ToDo Fellows"/>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/items" component={Items} />
          </main>
          <Footer footerText="Footer Stuff" />
        </React.Fragment>
      </BrowserRouter>
    );
  }

}