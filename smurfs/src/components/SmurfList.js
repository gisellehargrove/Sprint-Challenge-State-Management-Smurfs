import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { smurfGetter, smurfDeleter } from '../actions/actions';

import Form from './Form';

const SmurfList = props => {
  const [smurfs, updateSmurfs] = useState([]);
  const [selectedSmurf, updateSelected] = useState({});

  useEffect(() => {
    props.smurfGetter();
    updateSmurfs(props.smurfs);
  }, [])

  const handleDelete = () => {
    props.smurfDeleter(selectedSmurf.id);
    updateSelected({})
  }



  return (
    <div>
      { !props.smurfs.isFetching ? (
        <div className='smurf-container'>
          { props.smurfs.map(smurf => (
            <div onClick={() => updateSelected(smurf)} className='smurf' key={ smurf.id }>
              <div className='name'>
                { smurf.name }
              </div>
              <div className='height'>
                { smurf.height }
              </div>
              <div className='age'>
                { smurf.age }
              </div>
            </div>
          ))}
        </div>
      ) : <h1>Loading...</h1>}
      <div>current selected id: {selectedSmurf.name}</div>
      <button onClick={() => handleDelete()}>Delete Selected</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfGetter: state.smurfGetter,
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
  }
}

export default connect(
  mapStateToProps,
  { smurfGetter, smurfDeleter }
)(SmurfList);
