import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { smurfGetter } from '../actions/actions';

const SmurfList = props => {
  const [smurfs, updateSmurfs] = useState([]);

  useEffect(() => {
    console.log(props.smurfGetter())
    props.smurfGetter();
    console.log(props)
    updateSmurfs(props.smurfs);
  }, [])



  return (
    <div>
      { props.smurfs.length ? (
        <div className='smurf-container'>
          { props.smurfs.map(smurf => (
            <div className='smurf' key={ smurf.id }>
              <div className='name'>
                { smurf.name }
              </div>
            </div>
          ))}
        </div>
      ) : <h1>Loading...</h1>}
      {console.log(props.smurfs)}
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
  { smurfGetter }
)(SmurfList);
