import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF-SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF-SUCCESS';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';

export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL';


export const smurfGetter = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START} );
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch(
        {
          type: FETCH_SMURF_SUCCESS,
          payload: response.data
        }
      );
    })
    .catch(err => {
      dispatch(
        {
          type: FETCH_SMURF_FAIL,
          payload: err
        }
      );
    })
}

export const smurfSender = smurfObj => dispatch => {
  dispatch({ type: POST_SMURF_START });

  axios.post('http://localhost:3333/smurfs', smurfObj)
    .then(response => {
      dispatch(
        {
          type: POST_SMURF_SUCCESS,
          payload: response.data
        }
      );
    }).catch(err => {
      dispatch(
        {
          type: POST_SMURF_FAIL,
          payload: err
        }
      )
    })
};

export const smurfDeleter = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });

  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch(
        {
          type: DELETE_SMURF_SUCCESS,
          payload: response.data
        }
      );
    }).catch(err => {
      dispatch(
        {
          type: DELETE_SMURF_FAIL,
          payload: err
        }
      )
    })
};
