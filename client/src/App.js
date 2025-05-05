import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';
import ListingList from './components/ListingList';
import CreateListing from './components/CreateListing';
import './App.css';

const App = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/listings')
      .then(response => {
        setListings(response.data);
        console.log(response.data);
      })
      .catch(error =>
        console.error('Error fetching listings: ', error)
      );
  }, []);

  const handleCreateListing = (newListing) => {
    axios.post('http://localhost:5000/listings/add', newListing)
    .then(response => {
      setListings([...listings, response.data]);
      console.log('Listing created: ', response.data);
    })
    .catch(error =>
      console.error('Error creating listing: ', error)
    );
  };

  const handleUpdateListing = (listingId, updatedListing) => {
    axios.put(`http://localhost:5000/listings/update/${listingId}`, updatedListing)
    .then(response => {
      const updatedListings = listings.map(listing => 
        listing._id === listingId ? { ...listing, ...updatedListing } : listing
      );
      setListings(updatedListings);
      console.log('Listing updated: ', response.data)
    })
    .catch(error => console.error('Error updating listing: ', error));
  };

  const handleDeleteListing = (listingId) => {
    setListings(listings.filter(listing => listing._id !== listingId));
    axios.delete(`http://localhost:5000/listings/${listingId}`)
      .then(response => {
        console.log('Listing deleted: ', response.data);
      })
      .catch(error =>
        console.error('Error deleting listing: ', error)
      );
  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Create Listing</Link>
          </li>
          <li>
          <Link to="/listings">All Listings</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path ="/" element={<CreateListing onCreate={handleCreateListing}/>} />
        <Route path ="/listings" element={<ListingList listings={listings} 
        onUpdate={handleUpdateListing} onDelete={handleDeleteListing}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;