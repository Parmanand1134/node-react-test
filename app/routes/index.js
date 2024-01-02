
import express from 'express'
const router = express.Router();
import user from './user.routes';


router.use('/user', user);


module.exports = router