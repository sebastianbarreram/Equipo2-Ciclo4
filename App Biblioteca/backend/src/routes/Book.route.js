const {Router}=require('express');

const router=Router()

const BookCtrl=require('../controllers/Book.controller')

const Auth = require('../helper/Auth')


router.post('/crear',  BookCtrl.crear)
router.get('/listarLibros', BookCtrl.listar)
router.get('/listar/:id', BookCtrl.listarId)
router.get('/listarLibroUsuario/:id', BookCtrl.LibroDeUnUsuario)
router.delete('/eliminar/:id', BookCtrl.eliminar)
router.put('/actualizar/:id', BookCtrl.actualizar)
router.get('/buscar/:nombre', BookCtrl.buscarLibro)

//router.post('/crear',  Auth.verificarToken,  BookCtrl.crear)
//router.get('/listarEmpleados',  Auth.verificarToken, BookCtrl.listar)
//router.get('/listar/:id',  Auth.verificarToken, BookCtrl.listarId)
//router.get('/listarEmpleadosJefe/:id', Auth.verificarToken, BookCtrl.empleadoDeunJefe)
//router.delete('/eliminar/:id', Auth.verificarToken, BookCtrl.eliminar)
//router.put('/actualizar/:id', Auth.verificarToken, BookCtrl.actualizar)
//router.get('/buscar/:nombres', Auth.verificarToken, BookCtrl.buscarEmpleado)


module.exports=router