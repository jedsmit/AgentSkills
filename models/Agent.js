const mongoose = require('mongoose');


const AgentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    games:
        [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }]
    ,
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }]

});

module.exports = mongoose.model('Agent', AgentSchema);