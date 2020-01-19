import React from 'react';

const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bidAmount: null,
    }

    this.onBidChange = this.onBidChange.bind(this);
    this.handleBid = this.handleBid.bind(this);
  }

  onBidChange(e) {
    this.setState({ bidAmount: parseFloat(e.target.value) || null });
  }

  handleBid() {
    const { bidAmount } = this.state;
    const { listing } = this.props;

    if (bidAmount <= listing.bid) {
      alert('Sorry, you must bid more than ' + listing.bid + ' on this item.');
      return;
    }

    this.props.onBid(listing.id, bidAmount);
  }

  render() {
    const { listing } = this.props;

    if (!listing) {
      return (<main><h2 className="zeroStateMessage">Select a listing...</h2></main>)
    }

    return (
      <main>
        <h2>{listing.title}</h2>

        <div className="auctionInfo">
          <img src={listing.imageUrl} alt={listing.title} />

          <div className="auctionBidBox">
            <div className="auctionBidBox-currentBid">{formatter.format(listing.bid)}</div>
            <input type="number" id="bidAmount" onChange={this.onBidChange} />
            <button type="button" onClick={this.handleBid}>Bid</button>

            <div className="auctionBidBox-status">
              You are currently winning this auction!
            </div>
          </div>
        </div>

        <div>
          <p>{listing.description}</p>
        </div>
      </main>
    )
  }
}