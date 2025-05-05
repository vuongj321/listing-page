const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    rent: { type: String },
    address: { type: String },
    rooms: { type: String },
    email: { type: String }
})

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;