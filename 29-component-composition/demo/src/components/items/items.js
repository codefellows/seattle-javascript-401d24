import React from 'react';
import {Route,Link} from 'react-router-dom';

import './items.scss';

import Modal from '../modal/';
import Item from './item.js';
import ItemForm from './item-form.js';
import {renderIf} from '../../lib/utils.js';

export default class Items extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal:null,
      items:{},
    };

    this.postItem = this.postItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.putItem = this.putItem.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  postItem(data) {
    let modal = true;
    let item = {};
    item[data.id] = data;
    this.setState( {modal,items:Object.assign({}, this.state.items, item)} );
  }

  putItem(data) {
    let item = {};
    item[data.id] = data;
    this.setState( {items: Object.assign({}, this.state.items, item)} );
  }

  deleteItem(id) {
    let {[id]:deleted, ...items} = this.state.items;
    this.setState({items});
  }

  closeModal() {
    let modal = false;
    this.setState({modal});
  }

  render() {
    return (
      <React.Fragment>
        <div id="items">
          <ItemForm
            new="true"
            handler={this.postItem}
          />
          <h2>Items</h2>
          <ul>
            {
              Object.keys(this.state.items).map( (id,i) =>
                <Item
                  key={id}
                  item={this.state.items[id]}
                  handler={this.putItem}
                  delete={this.deleteItem}
                />
              )
            }
          </ul>
        </div>

        {
          renderIf(
            this.state.modal,
            <Modal close={this.closeModal}>
              <p>Whoa, Sailor!</p>
            </Modal>
          )
        }

      </React.Fragment>
    );
  }

}

