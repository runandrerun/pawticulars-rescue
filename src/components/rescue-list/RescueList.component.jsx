import React, { Component } from 'react';
import Loader from '../loader/Loader.component';
import RescueCard from '../rescue-card/RescueCard.component';
import { fetchOauth } from '../../adapters';
import './RescueList.styles.scss';


export default class RescueList extends Component {

  state = {
    rescues: null,
    foundPet: null,
    isFound: true,
    fetched: false,
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    // return fetchOauth()
    //   .then(res => {
    //     return this.setState({
    //       rescues: res.animals,
    //       fetched: true,
    //       loading: true,
    //     })
    //   });
  };

  renderRescueCards = (rescues) => {
    if (rescues.length >= 1) {
      return rescues.map(({ id, ...rescueData }) => {
        console.log(rescueData)
        return <RescueCard key={id} {...rescueData} />
      });
    };
  };

  render() {
    const { fetched, loading, rescues } = this.state;
    if (fetched) {
      return (
        <div id="rescue-list">
          {rescues.length >= 1 ? this.renderRescueCards(rescues) : "No"}
        </div>
      );
    } else if (loading && !fetched) {
      return  (
        <Loader />
      );
    } else {
      return <div/>
    };
  };
};
