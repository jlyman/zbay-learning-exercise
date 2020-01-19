function Listing(id, title, imageUrl, bid, description, endTimestamp) {
  this.id = id;
  this.title = title;
  this.imageUrl = imageUrl;
  this.bid = bid;
  this.description = description;
  this.endTimestamp = endTimestamp;
  this.isWinning = false;
} 

export default Listing;
