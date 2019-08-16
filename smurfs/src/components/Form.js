import React, { useState } from 'react';
import { connect } from 'react-redux';
import { smurfSender } from '../actions/actions';

const Form = props => {
  const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});

  const handleChange = event => {
    console.log(event.target.name)
    setNewSmurf({...newSmurf, [event.target.name]: event.target.value });

  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newSmurf)
    props.smurfSender(newSmurf)
  };

  return (
    <div className='form-container'>
      <form onSubmit={event => handleSubmit(event)}>
        <input onChange={event => handleChange(event)} type='text' name='name' placeholder='name' />
        <input onChange={event => handleChange(event)} type='text' name='age' placeholder='age' />
        <input onChange={event => handleChange(event)} type='text' name='height' placeholder='height' />
        <button>Create new Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfSender: state.smurfSender
  }
};

export default connect(
  mapStateToProps,
  { smurfSender }
)(Form);
