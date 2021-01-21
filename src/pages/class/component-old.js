import React, { Component } from 'react';

export default class ComponentOld extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <div>
        Component-old
      </div>
    )
  }
}