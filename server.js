
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactForm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
});

const Contact = mongoose.model('Contact', ContactSchema);

// Route to handle form submission
app.post('/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(200).send("Contact saved!");
    } catch (error) {
        res.status(500).send("Error saving contact.");
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});