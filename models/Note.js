const mongoose = require('mongoose');


const NoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Note', NoteSchema);