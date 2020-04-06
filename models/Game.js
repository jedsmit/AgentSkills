const mongoose = require('mongoose');


const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    skills:
        [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
    level:
    {
        type: String,
    }

});

module.exports = mongoose.model('Game', GameSchema);