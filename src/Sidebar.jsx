import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    return (<div id="sidebar">
      <h3>Live Auctions:</h3>

      <div className="auctionMiniDisplay">
        <img src="" alt="" />
        <h4 className="auctionMiniDisplay-title">Auction Item</h4>
        <span className="auctionMiniDisplay-price">$14.95</span> -
              <span className="auctionMiniDisplay-viewLink">View Item</span>
      </div>

      <div className="auctionMiniDisplay">
        <img src="" alt="" />
        <h4 className="auctionMiniDisplay-title">Auction Item</h4>
        <span className="auctionMiniDisplay-price">$14.95</span> -
              <span className="auctionMiniDisplay-viewLink">View Item</span>
      </div>

      <div className="auctionMiniDisplay">
        <img src="" alt="" />
        <h4 className="auctionMiniDisplay-title">Auction Item</h4>
        <span className="auctionMiniDisplay-price">$14.95</span> -
              <span className="auctionMiniDisplay-viewLink">View Item</span>
      </div>

      <div className="auctionMiniDisplay">
        <img src="" alt="" />
        <h4 className="auctionMiniDisplay-title">Auction Item</h4>
        <span className="auctionMiniDisplay-price">$14.95</span> -
              <span className="auctionMiniDisplay-viewLink">View Item</span>
      </div>
    </div>
    );
  }
}