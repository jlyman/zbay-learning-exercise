import React from 'react';

const formatter = new Intl.NumberFormat('en-gb', { currency: 'USD' })

export default class Main extends React.Component {
  render() {
    const { listing } = this.props;

    if (!listing) {
      return (<main><h2 className="zeroStateMessage">Select a listing...</h2></main>)
    }

    return (
      <main>
        <h2>{listing.title}</h2>
        <img src={listing.imageUrl} alt={listing.title} />

        <div className="auctionBidBox">
          <div className="auctionBidBox-currentBid">{formatter.format(listing.bid)}</div>
          <input type="number" id="bidAmount" />
          <button type="button">Bid</button>

          <div className="auctionBidBox-status">
            You are currently winning this auction!
              </div>
        </div>

        <div>
          <p>{listing.description}</p>
        </div>
      </main>
    )
  }
}