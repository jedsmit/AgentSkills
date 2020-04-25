const mongoose = require('mongoose');


const AgentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gameScores: {
        blackjack: [Number],
        baccarat: [Number],
        poker: [Number],
        fortunePaiGow: [Number],
        craps: [Number],
        roulette: [Number],
        bjVariants: [Number],
        pokerVariants: [Number],
        war: [Number],
        pgVariants: [Number],
        tiles: [Number],

    },

    notes: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Note'
        }
    ]

});

module.exports = mongoose.model('Agent', AgentSchema);