import React from 'react';

const SidebarListingBox = (props) => {
  return (
    <div className="auctionMiniDisplay">
      <img src={props.imageUrl} alt={props.title} />
      <h4 className="auctionMiniDisplay-title">{props.title}</h4>
      <div className="auctionMiniDisplay-details">
      <span className="auctionMiniDisplay-price">{props.bid}</span> -
      <button type="button" className="auctionMiniDisplay-viewLink" onClick={() => { props.onListingClick(props.id)}}>View Item</button>
      </div>
    </div>
  )
}

export default SidebarListingBox;
