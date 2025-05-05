import React, { useState } from 'react';

const CreateListing = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rent, setRent] = useState('');
    const [address, setAddress] = useState('');
    const [rooms, setRooms] = useState('');
    const [email, setEmail] = useState('');

    const handleCreate = () => {
        if (!title || !description || !rent || !address || !rooms || !email) {
            alert('Enter all fields');
            return;
        }

        const newListing = {
            title: title,
            description: description,
            rent: rent,
            address: address, 
            rooms: rooms, 
            email: email,
        };
        onCreate(newListing);

        setTitle('');
        setDescription('');
        setRent('');
        setAddress('');
        setRooms('');
        setEmail('');
    };

    return (
        <div className="container">
            <h2>Create New Listing</h2>
            <label>Title: </label>
            <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /> <br />
            <label>Description: </label>
            <input 
                type="text" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /> <br />
            <label>Rent: </label>
            <input 
                type="text" 
                value={rent}
                onChange={(e) => setRent(e.target.value)}
            /> <br />
            <label>Address: </label>
            <input 
                type="text" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            /> <br />
            <label>Number of Rooms: </label>
            <input 
                type="text" 
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
            /> <br />
            <label>Email: </label>
            <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /> <br />
            <button onClick={handleCreate}>Create Listing</button>
        </div>
    );
};

export default CreateListing;