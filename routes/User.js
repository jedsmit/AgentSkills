const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Agent = require('../models/Agent');

const signToken = userId => {
    return JWT.sign({
        iss: "Me",
        sub: userId
    }, "SuperSecret", { expiresIn: "2h" })
}

//register new user
userRouter.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        if (user)
            res.status(400).json({ message: { msgBody: "Username is already taken", msgError: true } });
        else {
            const newUser = new User({ username, password, role });
            newUser.save(err => {
                if (err)
                    res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } })
                else {
                    res.status(201).json({ message: { msgBody: "Account succcessfuly created", msgError: false } });
                };
            })
        }

    });
});

//login user
userRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, username, role } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { username, role } });
    }
});

//logout user
userRouter.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.clearCookie('access_token');
    res.json({ user: { username: "", role: "", }, success: true });
});

//add note
userRouter.post('/note', passport.authenticate('jwt', { session: false }), (req, res) => {
    const note = new Note(req.body);
    note.save(err => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        else {
            req.user.notes.push(note);
            req.user.save(err => {
                if (err)
                    res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
                else {
                    res.status(200).json({ message: { msgBody: "Successfully created note", msgError: false } });
                }
            });
        }
    });
});

//user notes
userRouter.get('/notes', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById({ _id: req.user._id }).populate('notes').exec((err, document) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        else {
            res.status(200).json({ notes: document.notes, authenticated: true });
        }
    })
});

//get agent list 
userRouter.get('/agents', passport.authenticate('jwt', { session: false }), (req, res) => {
    Agent.find((err, document) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        else {
            res.status(200).json({ agents: document, authenticated: true });
        }
    })
});


//agent page
userRouter.get('/agent/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Agent.findById((req.params.id)).populate('gameSores').exec((err, document) => {
        console.log(document)
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        else {
            res.status(200).json({ agent: document, authenticated: true });
        }
    })
});

//admin panel
userRouter.get('/admin', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.user.role === 'admin') {
        res.status(200).json({ message: { msgBody: 'You are an admin', msgError: false } })
    }
    else {
        res.status(403).json({ message: { msgBody: "You're not an admin, nice try", msgError: true } });
    }
});

//admin add agent
userRouter.post('/admin/agent', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.user.role === 'admin') {
        const agent = new Agent(req.body);
        agent.save(err => {
            if (err)
                res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
            else {
                req.user.agents.push(agent);
                req.user.save(err => {
                    if (err)
                        res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
                    else {
                        res.status(200).json({ message: { msgBody: "Successfully created agent", msgError: false } });
                    }
                });
            }
        });
    }
    else {
        res.status(403).json({ message: { msgBody: "You're not an admin, nice try", msgError: true } });
    };
})
//authenticates user
userRouter.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { username, role } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username, role } });
});



module.exports = userRouter;