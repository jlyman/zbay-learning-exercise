import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { fetchListings, postBid } from './api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      selectedListing: null,
      myBids: {}
    };

    this.handleViewListing = this.handleViewListing.bind(this);
    this.recordBid = this.recordBid.bind(this);
  }

  async componentDidMount() {
    const listings = await fetchListings();
    this.setState({
      listings
    });
  }

  handleViewListing(listingId) {
    this.setState({ selectedListing: listingId });
  }

  async recordBid(listingId, bidAmount) {
    // Save it to our list of bids
    const nextBids = Object.assign({}, this.state.myBids);
    nextBids[listingId] = bidAmount;
    this.setState({ myBids: nextBids });

    // Tell the server about our bid
    const newHighestBid = await postBid(listingId, bidAmount);
    // Record any bid changes from the server in our local state
    const listingsNextState =  this.state.listings.map(l => {
      if (l.id !== listingId) return l;

      return {
        ...l,
        bid: newHighestBid,
      };
    });
    this.setState({ listings: listingsNextState});
  }

  render() {
    const listing = this.state.listings.find(l => l.id === this.state.selectedListing);

    return (
      <div id="app">
        <Header />

        <div id="content">
          <Sidebar listings={this.state.listings} onListingClick={this.handleViewListing} />

          <Main listing={listing} onBid={this.recordBid} />
        </div>
      </div>
    );
  }
}

export default App;
