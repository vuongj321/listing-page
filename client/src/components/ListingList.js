import React, { useState } from 'react';

const ListingList = ({ listings, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(null);
    const [editedListing, setEditedListing] = 
    useState({ title: '', description: '', rent: '', address: '', rooms: '', email: ''});

    const handleEdit = (listing) => {
        setIsEditing(listing._id);
        setEditedListing({ title: listing.title, description: listing.description, rent: listing.rent, 
            address: listing.address, rooms: listing.rooms, email: listing.email});
    };

    const handleSave = (listingId) => {
        console.log(editedListing);
        onUpdate(listingId, editedListing);
        setIsEditing(null);
    };

    const handleCancel = () => {
        setIsEditing(null);
    };

    return (
        <div className="container">
            <h2>All Listings</h2>
            <ul>
                {listings.map((listing) => (
                    <li key={listing._id}>
                        {isEditing === listing._id ? (
                            <div>
                                <label>Title: </label>
                                <input
                                    type="text"
                                    value={editedListing.title}
                                    onChange={(e) => setEditedListing({...editedListing, title: e.target.value})}
                                />
                                <label>Description: </label>
                                <input 
                                    type="text" 
                                    value={editedListing.description}
                                    onChange={(e) => setEditedListing({...editedListing, description: e.target.value})}
                                /> 
                                <label>Rent: </label>
                                <input 
                                    type="text" 
                                    value={editedListing.rent}
                                    onChange={(e) => setEditedListing({...editedListing, rent: e.target.value})}
                                />
                                <label>Address: </label>
                                <input 
                                    type="text" 
                                    value={editedListing.address}
                                    onChange={(e) => setEditedListing({...editedListing, address: e.target.value})}
                                /> 
                                <label>Number of Rooms: </label>
                                <input 
                                    type="text" 
                                    value={editedListing.rooms}
                                    onChange={(e) => setEditedListing({...editedListing, rooms: e.target.value})}
                                />
                                <label>Email: </label>
                                <input 
                                    type="text" 
                                    value={editedListing.email}
                                    onChange={(e) => setEditedListing({...editedListing, email: e.target.value})}
                                /> 
                               
                                <button onClick={() => handleSave(listing._id)}>Save</button>
                                <button onClick={() => handleCancel()}>Cancel</button>
                            </div>

                        ) : (
                            <div>
                                <strong>Title: {listing.title}</strong>
                                <p>Description: {listing.description}</p>
                                <p>Rent: {listing.rent}</p>
                                <p>Address: {listing.address}</p>
                                <p>Number of Rooms: {listing.rooms}</p>
                                <p>Email: {listing.email}</p>
                                <button onClick={() => handleEdit(listing)}>Update</button>
                                <button onClick={() => onDelete(listing._id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ListingList;