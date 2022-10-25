//se crean los metodos CRUD
const doctorModelo = require("../models/doctorModelo")

const doctorOperaciones= {};

doctorOperaciones.crearDoctor = async(req, res)=>{
    try{
        const objeto = req.body;
        console.log(objeto)
        const doctor = new doctorModelo(objeto);
        const doctorGuardado = await doctor.save();
    }catch (error) {
        res.status(400).send("Mala peticion");
    }
}
doctorOperaciones.consultarDoctores = async(req, res)=>{
   try{
    const listadoctores = await doctorModelo.find();
    if(listadoctores.length > 0){
        res.status(200).send(listadoctores);
    }else{
        res.status(404).send("No hay doctores");
    }
   }catch (error) {
    res.status(400).send("Mala petición");
   }
}

doctorOperaciones.consultarDoctor = async(req, res)=>{
    try{
        const id = req.params.id;
        const doctor = await doctorModelo.findById(id);
        if(doctor.length =! null){
            res.status(200).send(doctor);
        }else{
            res.status(404).send("No se encuentra doctor");
        }
    
        
       }catch (error) {
        res.status(400).send("Mala petición" + error);
       }
    
}

doctorOperaciones.modificarDoctor = async(req, res)=>{
    
}

doctorOperaciones.borrarDoctor = async(req, res)=>{
    
}

module.exports = doctorOperaciones;