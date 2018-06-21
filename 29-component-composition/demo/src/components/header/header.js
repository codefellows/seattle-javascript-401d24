import React from 'react';
import {Link} from 'react-router-dom';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/items">Items</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;