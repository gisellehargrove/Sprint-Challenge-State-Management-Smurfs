import React, { Component } from "react";
import { connect } from 'react-redux';
import { smurfGetter } from '../actions/actions';
import Form from './Form';
import "./App.css";

// components
import SmurfList from './SmurfList';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Form />
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfGetter: smurfGetter
  }
}

export default connect(
  mapStateToProps,
  { smurfGetter }
)(App);
