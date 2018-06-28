import '../style/app.scss';

import React from 'react';

import Categories from './categories/category-container';
import Header from './header/header';
import Footer from './footer/footer';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Agile Fellows"/>
        <Categories/>
        <Footer>
          <div>This is some footer stuff</div>
        </Footer>
      </React.Fragment>
    );
  }
}

export default App;