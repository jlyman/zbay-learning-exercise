import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Listing from './Listing';

class App extends React.Component {
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
