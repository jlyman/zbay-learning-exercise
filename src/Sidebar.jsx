import React from 'react';
import SidebarListingBox from './SidebarListingBox';

export default class Sidebar extends React.Component {
  render() {
    return (<div id="sidebar">
      <h3>Live Auctions:</h3>

      {this.props.listings.map(listing => (
        <SidebarListingBox id={listing.id} title={listing.title} imageUrl={listing.imageUrl} bid={listing.bid} onListingClick={this.props.onListingClick} key={listing.id} />
      ))}
    </div>
    );
  }
}