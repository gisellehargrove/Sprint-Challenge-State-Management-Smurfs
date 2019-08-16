import {
  FETCH_SMURF_START,
  FETCH_SMURF_FAIL,
  FETCH_SMURF_SUCCESS
 } from '../actions/actions';

const initialState = {
  smurfs: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log(action.payload)
  switch(action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        smurfs: action.payload
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        error: action.payload
      };

      default:
        return state;
  }
};

export default reducer;
