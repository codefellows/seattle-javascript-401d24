const initialState = {};

/*
    {
      categoryID: [ {id:xxx,title:xxx,categoryID:xxx}, ... ]
    }
*/

export default (state = initialState, action) => {

  let {type, payload = {}} = action;

  switch ( type ) {

    default:
      return state;

  }
};

