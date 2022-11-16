//se crean los metodos CRUD
const citasModelo = require("../models/citasModelo");

const citasOperaciones= {};

citasOperaciones.crearCita = async(req, res)=>{
    try{
        const objeto = req.body;
        const cita = new citasModelo(objeto);
        const citaGuardada = await cita.save();
        res.status(201).send(citaGuardada)
    }catch (error) {
        res.status(400).send("Mala peticion");
    }
}
citasOperaciones.consultarCita = async(req, res)=>{
   try{
    const filtro = req.query;
    let listaCitas;
    if (filtro.nombreEspecialidad != null){
        listaCitas = await citasModelo.find({
            "$or":[
                {"nombreEspecialidad": {$regex:filtro.nombreEspecialidad, $options:"i"}}
                
            ]
        });
    }else{
        listaCitas = await citasModelo.find();
    } 
    if(listaCitas.length > 0){
        res.status(200).send(listaCitas);
    }else{
        res.status(404).send("No hay especialidades");
    }
   }catch (error) {
    res.status(400).send("Mala petición");
   }
}

citasOperaciones.consultarCitas = async(req, res)=>{
    try{
        const id = req.params.id;
        const cita = await citasModelo.findById(id);
        if(cita.length =! null){
            res.status(200).send(cita);
        }else{
            res.status(404).send("No hay cita");
        }
       }catch (error) {
        res.status(400).send("Mala petición" + error);
       }
    
}

citasOperaciones.modificarCita = async(req, res)=>{
    try{
        const id = req.params.id;
        const body = req.body;
        const cita = {
            //estaos son los campos que puedo modificar
            fechaAgenda: body.fechaAgenda
        }
        const citaActualizada = await citasModelo.findByIdAndUpdate(id, cita, {new: true});
        res.status(200).send(citaActualizada)
    }catch(error){
        res.status(400).send("Mala petición "+error)
    }
}

citasOperaciones.borrarCita = async(req, res)=>{
    try{
        const id = req.params.id;
        const citaBorrada = await citasModelo.findByIdAndDelete(id);
        res.status(200).send(citaBorrada)
    }catch(error){
        res.status(400).send("Mala petición "+error)
    }
}

module.exports = citasOperaciones;