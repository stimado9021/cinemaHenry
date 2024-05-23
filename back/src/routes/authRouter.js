const express =require('express');
const authControler = require('../controllers/authControler');
const authRouter = express.Router();


authRouter.post('/Login',authControler)

module.exports =authRouter