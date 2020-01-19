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
    };
  }

  componentDidMount() {
    // TODO: fetch listings from server
    // const data = fetch('/server/listings');
    const data = {
      response: "[{\"id\":1,\"title\":\"Football signed by Ronaldo himself\",\"img\":\"\",\"startingBid\":250,\"description\":\"A football, used in a game, signed by the great Ronaldo\",\"endTimestamp\":1579857960000},{\"id\":2,\"title\":\"16\\\" MacBook Pro 2019\",\"img\":\"\",\"startingBid\":1800,\"description\":\"Great condition, barely used, 16\\\" MBP with a 512GB SSD.\",\"endTimestamp\":1579858800000},{\"id\":3,\"title\":\"Tic-Tacs (White) 1,000 pack\",\"img\":34.95,\"startingBid\":\"One thousand boxes of white Tic-Tacs, for the Tic-Tac crazed. Perfect gift for a birthday.\",\"endTimestamp\":1579831740000},{\"id\":4,\"title\":\"Two turtledoves and 1 partridge\",\"img\":11,\"startingBid\":\"Did you miss Christmas? Now's your chance to make it up to your special someone!\",\"endTimestamp\":1579837500000}]"
    }
    const listings = JSON.parse(data.response)
    this.setState({
      listings: listings.map(l => new Listing(l.id, l.title, l.img, l.startingBid, l.description, l.endTimestamp))
    });
  }


  render() {
    const listing = new Listing(300, 'Private Plane', '', 100, 'A Gulfstream IV, brand new, ready for delivery.', new Date());

    return (
      <div id="app">
        <Header />

        <div id="content">
          <Sidebar />

          <Main listing={listing} />
        </div>
      </div>
    );
  }
}

export default App;
