const mongoose = require('mongoose');


const AgentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gameScores: {
        blackjack: {
            type: Number,
        },
        baccarat: {
            type: Number
        },
        poker: {
            type: Number
        },
        fortunePaiGow: {
            type: Number
        },
        craps: {
            type: Number
        },
        roulette: {
            type: Number
        },
        bjVariants: {
            type: Number
        },
        pkVariants: {
            type: Number
        },
        war: {
            type: Number
        },
        pgVariants: {
            type: Number
        },
        paiGowTiles: {
            type: Number
        }
    },
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }]

});

module.exports = mongoose.model('Agent', AgentSchema);