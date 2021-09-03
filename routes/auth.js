var express = require('express');
var router = express.Router();
const fs = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');

const db = fs.firestore();
const userDb = db.collection('users');

router.get('/', function(req, res) {
    res.status(200).send('hit')
});

router.get('/login', function(req, res) {
    console.log('grabbing user');
});

router.post('/register', async function(req, res) {
    console.log('creating user');
    let userData = {
        name: 'test',
        email: 'test@test.com',
        password: '12345'
    }
    const user = userDb.doc(uuidv4());
    await user.set({
        userData
    }).then(function() {
        res.status(200).send('user created')
    }).catch(function() {
        console.error('ERROR')
    })
});

router.put('/edit', function(req, res) {
    console.log('adding or editing an attribute of user');
});

router.post('/delete/:user', function(req, res) {
    console.log('deleting user based on userId');
});

module.exports = router