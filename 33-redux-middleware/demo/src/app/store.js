import {createStore,combineReducers,applyMiddleware} from 'redux';

import reporter from './middleware/reporter.js';
import categoryReducer from './reducers/categories.js';
import cardReducer from './reducers/cards.js';

let reducers = combineReducers({
  categories: categoryReducer,
  cards: cardReducer,
});

export default () => createStore(reducers, applyMiddleware(reporter));