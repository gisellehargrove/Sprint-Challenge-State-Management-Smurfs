import React, { Component } from "react";
import { connect } from 'react-redux';
import { smurfGetter } from '../actions/actions';
import "./App.css";

// components
import SmurfList from './SmurfList';


class App extends Component {

  render() {
    return (
      <div className="App">
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
