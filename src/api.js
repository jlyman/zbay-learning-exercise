import Listing from "./Listing";

const API_URL = 'https://zbay.ngrok.io';

export async function fetchListings() {
  const res = await fetch(`${API_URL}/listings`);
  const data = await res.json();

  const listings = data.map(l => new Listing(l.id, l.title, l.img, l.startingBid, l.description, l.endTimestamp));

  return listings;
}

export async function postBid(listingId, amount) {
  const res = await fetch(`${API_URL}/listings/${listingId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ lastBid: amount })
  });
  const data = await res.json();

  return data.highestBid;
}