//se crean los metodos CRUD
const doctorModelo = require("../models/doctorModelo")
const bcrypt = require("bcrypt");

const doctorOperaciones= {};

const cifrarPassword = async (passw) => {
    const SALT_TIMES = 10;
    const salt = await bcrypt.genSalt(SALT_TIMES);
    return await bcrypt.hash(passw, salt);
}

doctorOperaciones.crearDoctor = async(req, res)=>{
    try{
        const body = req.body;
        body.passw = await cifrarPassword(body.passw);
        const doctor = new doctorModelo(body);
        const doctorGuardado = await doctor.save();
        res.status(201).send(doctorGuardado)
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
    try{
        const id = req.params.id;
        const body = req.body;
        if (body.passw != null) {
            body.passw = await cifrarPassword(body.passw);
        }
        const doctor = {
            //estaos son los campos que puedo modificar
            nombre_Doctor: body.nombre_Doctor,
            apellidos_Doctor: body.apellidos_Doctor,
            especialidad: body.especialidad,
            disponibilidad_Horaria: body.disponibilidad_Horaria,
            telefono_Contacto: body.telefono_Contacto,
            passw: body.passw,
            es_admin: body.es_admin
        }
        const doctorActualizado = await doctorModelo.findByIdAndUpdate(id, doctor, {new: true});
        res.status(200).send(doctorActualizado)
    }catch(error){
        res.status(400).send("Mala petición "+error)
    }
}



module.exports = doctorOperaciones;