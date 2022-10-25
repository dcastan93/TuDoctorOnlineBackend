//se crean los metodos CRUD
const pacientesModelo = require("../models/pacientesModelo")

const pacientesOperaciones= {};

pacientesOperaciones.crearPaciente = async(req, res)=>{
    try{
        const objeto = req.body;
        console.log(objeto)
        const paciente = new pacientesModelo(objeto);
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
    
}

pacientesOperaciones.borrarDoctor = async(req, res)=>{
    
}

module.exports = pacientesOperaciones;