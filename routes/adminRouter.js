const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.get('/', auth, (req, res) =>{
    if(req.user.admin){
        res.send(req.user);
    }else{
        res.status(401).send('Not Admin: Acess Denied');
    }

    
})

module.exports = router;