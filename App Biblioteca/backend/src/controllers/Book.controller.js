const BookCtrl = {}
const Book = require('../models/Book.model')

BookCtrl.crear = async(req,res)=>{

    const {name, author, year, available, assign}=req.body

    const NuevoLibro = new Book({

        name,
        author,
        year,
        available,
        assign

    })

    const respuesta = await NuevoLibro.save()

    res.json({

        mensaje:'Libro creado',
        respuesta

    })
}


BookCtrl.listar=async(req,res)=>{

    const respuesta = await Book.find()
    res.json(respuesta)

}


BookCtrl.listarId = async(req,res)=>{

    const id = req.params.id
    const respuesta = await Book.findById({_id:id})

    res.json(respuesta)


}

BookCtrl.LibroDeUnUsuario = async(req,res)=>{

    const id = req.params.id
    const respuesta = await Book.find({ assign : id})
    res.json(respuesta)

}

BookCtrl.eliminar = async(req,res)=>{

    const id=req.params.id
    await Book.findByIdAndRemove({_id:id})
    res.json({

        mensaje: 'Libro eliminado'

    })

}


BookCtrl.actualizar=async(req,res)=>{

    const id = req.params.id
    await Book.findByIdAndUpdate({_id:id},req.body)

    res.json({

        mensaje:'Libro actualizado'

    })
}


BookCtrl.buscarLibro = async(req, res)=>{

    const nombre = req.params.name

    const respuesta = await Book.findOne({name:{ $regex:".*" +nombre+ ".*"}})

    res.json(respuesta)

}




module.exports=BookCtrl