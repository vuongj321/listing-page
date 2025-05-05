const express = require('express');
const router = express.Router();
const Listing = require('../models/listing.model');

router.post('/add', (req, res) => {
    const { title, description, rent, address, rooms, email } = req.body;

    const newListing = new Listing({
        title, 
        description, 
        rent, 
        address, 
        rooms, 
        email,
    });

    newListing.save()
        .then(newListing => res.json(newListing))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
    Listing.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.put('/update/:id', (req, res) => {
    const { title, description, rent, address, rooms, email } = req.body;

    Listing.findByIdAndUpdate(req.params.id, { title, description, rent, address, rooms, email })
        .then(() => res.json('Listing updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.delete('/:id', (req, res) => {
    Listing.findByIdAndDelete(req.params.id)
        .then(() => res.json('Listing deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;