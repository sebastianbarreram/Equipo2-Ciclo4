const UserCtrl = {}
const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


UserCtrl.crearUsuario = async(req, res) => {
    const { nombre, correo, contrasena } = req.body
    const NuevoUsuario = new User({
        nombre,
        correo,
        contrasena
    })
    const correousuario = await User.findOne({ correo: correo })
    if (correousuario) {
        res.json({
            mensaje: 'El correo ya existe'
        })

    } else {
        NuevoUsuario.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({ _id: NuevoUsuario._id }, 'Secreta')
        await NuevoUsuario.save()
        res.json({
            mensaje: 'Bienvenido',
            id: NuevoUsuario._id,
            nombre: NuevoUsuario.nombre,
            token
        })

    }
}


UserCtrl.login = async(req,res)=>{

    const {correo, contrasena}=req.body

    const usuario = await User.findOne({correo:correo})

    if(!usuario){

        return res.json({

            mensaje:'Correo incorrecto'

        })

    }


    const match= await bcrypt.compare(contrasena, usuario.contrasena)

    if(match){


        const token = jwt.sign({ _id: usuario._id }, 'Secreta') 



        res.json({

            mensaje: 'Bienvenido',
            id: usuario.id,
            nombre: usuario.nombre,
            token


        })

    }
    else {

            res.json({

                mensaje:'Contraseña incorrecta'

            })

    }


}


module.exports = UserCtrl