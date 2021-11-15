const { Router } = require('express')
const router = Router()
const UserCtrl = require('../controllers/User.controller')

router.post('/crear', UserCtrl.crearUsuario)
router.post('/login', UserCtrl.login)
module.exports = router