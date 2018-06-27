import {createStore} from 'redux';

import categoryReducer from './reducers/categories';

export default () => createStore(categoryReducer);