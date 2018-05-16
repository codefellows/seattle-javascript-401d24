'use strict';

// Callbacks OFFLOAD functionality.
// Think of it as though you're telling a method to go do it's work and when it's done, to handle it for you
// A good analogy would be to picture hiring a moving company to move you
//   You give them all of your stuff AND put workers in the back of the truck with instructions
//   When they get there, they read the instructions and move you in.
//   You don't have to worry about when, and you already told them how.  At some point, it'll just get done
//   according to your specifications.

let myCallback = (data) => {
  console.log('Received', data);
};

let useTheCallback = (cb) => {
  // do lots of work and come up with some text
  let text = 'some random text';
  cb(text);
};

useTheCallback(myCallback);


// ERROR FIRST Callbacks --- always expect to be called with the first parameter being either an
// error when an error occurs, or as undefined when not.  In the "good" case, data is given as
// the second parameter.

let errorFirstCallback = (err, data) => {
  if ( err ) { throw err; }
  console.log('Received', data);
};

let useTheErrorFirstCallback = (cb) => {
  // do lots of work and come up with some text
  let text = 'some random text';
  cb(undefined, text);
};


useTheErrorFirstCallback(errorFirstCallback);




