import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />

        <div id="content">
          <Sidebar />

          <Main />
        </div>
      </div>
    );
  }
}

export default App;
