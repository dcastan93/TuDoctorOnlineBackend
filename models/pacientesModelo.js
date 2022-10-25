const mongoose = require("mongoose");
const pacientesSchema = mongoose.Schema({
    nombre_Paciente:{type: String, maxLenght: 400, require: true},
    apellidos_Paciente:{type: String, maxLenght: 400, require: true},
    direccion:{type: String, maxLenght: 400, require: true},
    historia_Medica: [
        {
            diagnostico: {type: String, maxLenght: 400, require: true},
            medicamento: {type: String, maxLenght: 400, require: true},
            fecha: {type: Date, require: true}
        }
    ], //acá va 
    fecha_Nacimiento:{type: String, maxLenght: 400, require: true } ,
    telefono_Contacto: {type: String, maxLenght: 400, require: true },
    email:{type: String, maxLenght: 400, required: true}
});
module.exports = mongoose.model("pacientes", pacientesSchema);