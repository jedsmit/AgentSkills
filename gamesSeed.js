const mongoose = require("mongoose");
const db = require("./models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/agentSkills");



const gamesSeed = [
    {
        name: "Blackjack",

    },
    {
        name: "Baccarat",

    },
    {
        name: "Poker",

    },
    {
        name: "Fortune Pai Gow",

    },
    {
        name: "Craps",

    },
    {
        name: "Roulette",

    },
    {
        name: "Blackjack Variants",

    },
    {
        name: "Poker Variants",

    },
    {
        name: "Casino War",

    },
    {
        name: "Pai Gow Variants",

    },
    {
        name: "Pai Gow Tiles",

    }
];

db.Game.collection.insertMany(gamesSeed)
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
