import React, { Component } from 'react';
import { fetchOauth } from '../adapters';
import RescueCard from '../components/RescueCard';

export default class RescueContainer extends Component {

  state = {
    rescues: null,
    foundPet: null,
    isFound: true,
    fetched: false,
    loading: false,
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    return fetchOauth()
      .then(res => {
        return this.setState({
          rescues: res.animals,
          fetched: true,
          loading: true,
        })
      });
  };

  renderRescueCards = () => {
    let { rescues } = this.state;
    if (rescues.length >= 1) {
      return rescues.map((rescue, i) => {
        console.log(rescue)
        return <RescueCard key={i} rescue={rescue} />
      });
    };
  };

  render() {
    const { fetched, loading, rescues } = this.state;
    if (fetched) {
      return (
        <div>
          {rescues.length >= 1 ? this.renderRescueCards() : "No"}
        </div>
      )
    } else if (loading && !fetched) {
      return  <div className="container loader">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
    } else {
      return <div/>
    };
  };
};
