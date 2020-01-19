import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    return (<div id="sidebar">
      <h3>Live Auctions:</h3>

      <div class="auctionMiniDisplay">
        <img src="" alt="" />
        <h4 class="auctionMiniDisplay-title">Auction Item</h4>
        <span class="auctionMiniDisplay-price">$14.95</span> -
              <span class="auctionMiniDisplay-viewLink">View Item</span>
      </div>

      <div class="auctionMiniDisplay">
        <img src="" alt="" />
        <h4 class="auctionMiniDisplay-title">Auction Item</h4>
        <span class="auctionMiniDisplay-price">$14.95</span> -
              <span class="auctionMiniDisplay-viewLink">View Item</span>
      </div>

      <div class="auctionMiniDisplay">
        <img src="" alt="" />
        <h4 class="auctionMiniDisplay-title">Auction Item</h4>
        <span class="auctionMiniDisplay-price">$14.95</span> -
              <span class="auctionMiniDisplay-viewLink">View Item</span>
      </div>

      <div class="auctionMiniDisplay">
        <img src="" alt="" />
        <h4 class="auctionMiniDisplay-title">Auction Item</h4>
        <span class="auctionMiniDisplay-price">$14.95</span> -
              <span class="auctionMiniDisplay-viewLink">View Item</span>
      </div>
    </div>
    );
  }
}