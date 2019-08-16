import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF-SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const smurfGetter = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START} );
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response.data)
      dispatch({ type: FETCH_SMURF_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SMURF_FAIL });
    })
}

export const smurfSender = () => dispatch => {

  // dispatch({ type: FETCH_SMURF_SUCCESS})
};
