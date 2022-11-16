//se crean los metodos CRUD
const especialidadModelo = require("../models/especialidadModelo");

const EspecialidadOperaciones= {};

EspecialidadOperaciones.crearEspecialidad = async(req, res)=>{
    try{
        const objeto = req.body;
        const especialidad = new EspecialidadModelo(objeto);
        const especialidadGuardada = await especialidad.save();
        res.status(201).send(especialidadGuardada)
    }catch (error) {
        res.status(400).send("Mala peticion");
    }
}
EspecialidadOperaciones.consultarEspecialidades = async(req, res)=>{
   try{
    const filtro = req.query;
    let listaEspecialidades;
    if (filtro.nombreEspecialidad != null){
        listaEspecialidades = await EspecialidadModelo.find({
            "$or":[
                {"nombreEspecialidad": {$regex:filtro.nombreEspecialidad, $options:"i"}}
                
            ]
        });
    }else{
        listaEspecialidades = await EspecialidadModelo.find();
    } 
    if(listaEspecialidades.length > 0){
        res.status(200).send(listaEspecialidades);
    }else{
        res.status(404).send("No hay especialidades");
    }
   }catch (error) {
    res.status(400).send("Mala petición");
   }
}

EspecialidadOperaciones.consultarEspecialidad = async(req, res)=>{
    try{
        const id = req.params.id;
        const especialidad = await EspecialidadModelo.findById(id);
        if(especialidad.length =! null){
            res.status(200).send(especialidad);
        }else{
            res.status(404).send("No hay especialidad");
        }
    
        
       }catch (error) {
        res.status(400).send("Mala petición" + error);
       }
    
}

EspecialidadOperaciones.modificarEspecialidad = async(req, res)=>{
    try{
        const id = req.params.id;
        const body = req.body;
        const especialidad = {
            //estaos son los campos que puedo modificar
            nombreEspecialidad: body.nombreEspecialidad,
            descripcion: body.descripcion,
            atiende_solo_Mujeres: body.atiende_solo_Mujeres
        }
        const especialidadActualizada = await especialidadModelo.findByIdAndUpdate(id, especialidad, {new: true});
        res.status(200).send(especialidadActualizada)
    }catch(error){
        res.status(400).send("Mala petición "+error)
    }
}

EspecialidadOperaciones.borrarEspecialidad = async(req, res)=>{
    try{
        const id = req.params.id;
        const especialidadBorrada = await especialidadModelo.findByIdAndDelete(id);
        res.status(200).send(especialidadBorrada)
    }catch(error){
        res.status(400).send("Mala petición "+error)
    }
}

module.exports = EspecialidadOperaciones;