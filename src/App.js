import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Listing from './Listing';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      selectedListing: null,
    };

    this.handleViewListing = this.handleViewListing.bind(this);
  }

  componentDidMount() {
    // TODO: fetch listings from server
    // const data = fetch('/server/listings');
    const data = {
      response:
        '[{"id":1,"title":"Football signed by Ronaldo himself","img":"","startingBid":250,"description":"A football, used in a game, signed by the great Ronaldo","endTimestamp":1579862280000},{"id":2,"title":"16\\" MacBook Pro 2019","img":"","startingBid":1800,"description":"Great condition, barely used, 16\\" MBP with a 512GB SSD.","endTimestamp":1579846320000},{"id":3,"title":"Tic-Tacs (White) 1,000 pack","img":"","startingBid":34.95,"description":"One thousand boxes of white Tic-Tacs, for the Tic-Tac crazed. Perfect gift for a birthday.","endTimestamp":1579831140000},{"id":4,"title":"Two turtledoves and 1 partridge","img":"","startingBid":11,"description":"Did you miss Christmas? Now\'s your chance to make it up to your special someone!","endTimestamp":1579831680000}]'
    };
    const listings = JSON.parse(data.response)
    this.setState({
      listings: listings.map(l => new Listing(l.id, l.title, l.img, l.startingBid, l.description, l.endTimestamp))
    });
  }

  handleViewListing(listingId) {
    this.setState({ selectedListing: listingId });
  }

  render() {
    const listing = this.state.listings.find(l => l.id === this.state.selectedListing);

    return (
      <div id="app">
        <Header />

        <div id="content">
          <Sidebar listings={this.state.listings} onListingClick={this.handleViewListing} />

          <Main listing={listing} />
        </div>
      </div>
    );
  }
}

export default App;
