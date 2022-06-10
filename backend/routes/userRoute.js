const express = require('express')
const {registerUser, loginUser, getMP} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router()



router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/mp', protect, getMP)

module.exports = router