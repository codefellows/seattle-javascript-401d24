'use strict';

import User from './model.js';

export default (req, res, next) => {

  // Validate the user using the model's authenticate method
  let authenticate = (auth) => {
  };

  // If we're not authenticated either show an error or pop a window
  let getAuth = () => {
  };

  // Try to authenticate -- parse out the headers and do some work!
  try {
  } catch(e) {
    next(e);
  }
};


