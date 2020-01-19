import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <h2>This Auction Item</h2>
        <img src="" alt="" />

        <div class="auctionBidBox">
          <div class="auctionBidBox-currentBid">$14.95</div>
          <input type="number" id="bidAmount" />
          <button type="button">Bid</button>

          <div class="auctionBidBox-status">
            You are currently winning this auction!
              </div>
        </div>

        <div>
          <p>Listing description here...</p>
        </div>
      </main>
    )
  }
}