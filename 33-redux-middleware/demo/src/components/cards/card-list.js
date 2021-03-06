import React from 'react';
import PropTypes from 'prop-types';

import CardQuickForm from './card-quick-form';
import Card from './card';

class CardList extends React.Component {

  render() {

    let categoryId = this.props.categoryId;
    let cards = this.props.cards[categoryId];

    return (

      <div className="deck">

        <CardQuickForm handler={this.props.handleAdd} categoryId={categoryId} />

        {
          cards && cards.map( (card,i) =>
            <Card
              key={card.id}
              handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
              card={card}
              categoryId={categoryId}
            />
          )
        }

      </div>

    );
  }

}

CardList.propTypes = {
  categoryId: PropTypes.string,
  cards: PropTypes.object,
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default CardList;