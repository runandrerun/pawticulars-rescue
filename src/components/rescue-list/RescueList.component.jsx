import React, { Component } from 'react';
import RescueCard from '../rescue-card/RescueCard.component';
import { Grid } from 'semantic-ui-react';
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
    return fetchOauth()
      .then(res => {
        return this.setState({
          rescues: res.animals,
          fetched: true,
          loading: true,
        })
      });
  };

  renderRescueCards = (rescues) => {
    if (rescues.length >= 1) {
      return rescues.map(({ id, ...rescueData }) => {
        console.log(rescueData)
        return <RescueCard key={id} rescue={rescueData} />
      });
    };
  };

  render() {
    const { fetched, loading, rescues } = this.state;
    if (fetched) {
      return (
        <section id="rescue-list">
          <Grid columns={3} divided>
            <Grid.Row>
              {rescues.length >= 1 ? this.renderRescueCards(rescues) : "No"}
            </Grid.Row>
          </Grid>
        </section>
      );
    } else if (loading && !fetched) {
      return  (
        <div className="container loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return <div/>
    };
  };
};
