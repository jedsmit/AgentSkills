const mongoose = require('mongoose');


const AgentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    blackjack: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 },
        q3: { type: Number, default: 0 },
        q4: { type: Number, default: 0 },
        q5: { type: Number, default: 0 },
        q6: { type: Number, default: 0 },
        q7: { type: Number, default: 0 }
    },
    baccarat: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 },
        q3: { type: Number, default: 0 },
        q4: { type: Number, default: 0 },
        q5: { type: Number, default: 0 },
        q6: { type: Number, default: 0 },
        q7: { type: Number, default: 0 },
        q8: { type: Number, default: 0 }
    },
    poker: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 },
        q3: { type: Number, default: 0 },
        q4: { type: Number, default: 0 },
        q5: { type: Number, default: 0 },
        q6: { type: Number, default: 0 },
        q7: { type: Number, default: 0 }
    },
    fortunePaiGow: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 },
        q3: { type: Number, default: 0 },
        q4: { type: Number, default: 0 },
        q5: { type: Number, default: 0 }
    },
    craps: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 },
        q3: { type: Number, default: 0 },
        q4: { type: Number, default: 0 },
        q5: { type: Number, default: 0 },
        q6: { type: Number, default: 0 },
        q7: { type: Number, default: 0 },
        q8: { type: Number, default: 0 },
        q9: { type: Number, default: 0 }
    },
    roulette: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 },
        q3: { type: Number, default: 0 },
        q4: { type: Number, default: 0 },
        q5: { type: Number, default: 0 },
        q6: { type: Number, default: 0 },
        q7: { type: Number, default: 0 },
    },
    bjVariants: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 },
    },
    pokerVariants: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 },
        q3: { type: Number, default: 0 },
        q4: { type: Number, default: 0 },
        q5: { type: Number, default: 0 }
    },
    war: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 }
    },
    pgVariants: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 }
    },
    tiles: {
        q1: { type: Number, default: 0 },
        q2: { type: Number, default: 0 },
        q3: { type: Number, default: 0 },
        q4: { type: Number, default: 0 },
        q5: { type: Number, default: 0 },
        q6: { type: Number, default: 0 }
    },

    notes:
    {
        blackjack: {
            q1: [String],
            q2: [String],
            q3: [String],
            q4: [String],
            q5: [String],
            q6: [String],
            q7: [String]
        },
        baccarat: {
            q1: [String],
            q2: [String],
            q3: [String],
            q4: [String],
            q5: [String],
            q6: [String],
            q7: [String],
            q8: [String]
        },
        poker: {
            q1: [String],
            q2: [String],
            q3: [String],
            q4: [String],
            q5: [String],
            q6: [String],
            q7: [String],
        },
        fortunePaiGow: {
            q1: [String],
            q2: [String],
            q3: [String],
            q4: [String],
            q5: [String],
        },
        craps: {
            q1: [String],
            q2: [String],
            q3: [String],
            q4: [String],
            q5: [String],
            q6: [String],
            q7: [String],
            q8: [String],
            q9: [String]
        },
        roulette: {
            q1: [String],
            q2: [String],
            q3: [String],
            q4: [String],
            q5: [String],
            q6: [String],
            q7: [String],
        },
        bjVariants: {
            q1: [String],
            q2: [String],
        },
        pokerVariants: {
            q1: [String],
            q2: [String],
            q3: [String],
            q4: [String],
            q5: [String],
        },
        war: {
            q1: [String],
            q2: [String],
        },
        pgVariants: {
            q1: [String],
            q2: [String]
        },
        tiles: {
            q1: [String],
            q2: [String],
            q3: [String],
            q4: [String],
            q5: [String],
            q6: [String]
        }
    }



});

module.exports = mongoose.model('Agent', AgentSchema);