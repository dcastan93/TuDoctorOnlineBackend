//se crean los metodos CRUD
const pacientesModelo = require("../models/pacientesModelo")
const bcrypt = require("bcrypt");
const pacientesOperaciones= {};
const cifrarPassword = async (passw) => {
    const SALT_TIMES = 10;
    const salt = await bcrypt.genSalt(SALT_TIMES);
    return await bcrypt.hash(passw, salt);
}
pacientesOperaciones.crearPaciente = async(req, res)=>{
    try{
        const body = req.body;
        body.passw = await cifrarPassword(body.passw);
        const paciente = new pacientesModelo(body);
        const pacienteGuardado = await paciente.save();
        res.status(201).send(pacienteGuardado)
    }catch (error) {
        res.status(400).send("Mala peticion");
    }
}
pacientesOperaciones.consultarPacientes = async(req, res)=>{
   try{
    const listaPacientes = await pacientesModelo.find();
    if(listaPacientes.length > 0){
        res.status(200).send(listaPacientes);
    }else{
        res.status(404).send("No hay pacientes");
    }
   }catch (error) {
    res.status(400).send("Mala petición");
   }
}

pacientesOperaciones.consultarPaciente = async(req, res)=>{
    try{
        const id = req.params.id;
        const paciente = await pacientesModelo.findById(id);
        if(paciente.length =! null){
            res.status(200).send(paciente);
        }else{
            res.status(404).send("No se encuentra paciente");
        }
       }catch (error) {
        res.status(400).send("Mala petición" + error);
       }
}

pacientesOperaciones.modificarPacientes = async(req, res)=>{
    try{
        const id = req.params.id;
        const body = req.body;
        if (body.passw != null) {
            body.passw = await cifrarPassword(body.passw);
        }
        const paciente = {
            //estaos son los campos que puedo modificar
            nombre_Paciente: body.nombre_Paciente,
            apellidos_Paciente: body.apellidos_Paciente,
            direccion: body.direccion,
            email: body.email,
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


module.exports = pacientesOperaciones;