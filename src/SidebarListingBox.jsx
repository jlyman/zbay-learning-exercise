import React from 'react';

const SidebarListingBox = (props) => {
  return (
    <button type="button" onClick={() => { props.onListingClick(props.id) }} className="auctionMiniDisplay">
      <img src={props.imageUrl} alt={props.title} />
      <h4 className="auctionMiniDisplay-title">{props.title}</h4>
      <div className="auctionMiniDisplay-details">
        <span className="auctionMiniDisplay-price">{props.bid}</span> -
        <span className="auctionMiniDisplay-viewLink">View Item</span>
      </div>
    </button>
  )
}

export default SidebarListingBox;
