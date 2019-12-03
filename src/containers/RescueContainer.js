import React, { Component } from 'react';
import { fetchOauth } from '../adapters';

export default class RescueContainer extends Component {
  componentDidMount() {
    fetchOauth()
  };
  render() {
    return (
      <div></div>
    )
  }
}
