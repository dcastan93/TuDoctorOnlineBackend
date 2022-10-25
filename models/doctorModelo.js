const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema({
    nombre_Doctor:{type: String, maxLenght: 400, require: true},
    apellidos_Doctor:{type: String, maxLenght: 400, require: true},
    especialidad:{type: String, maxLenght: 400, require: true},
    //disponibilidadHoraria: , //acá va 
    telefono_Contacto: {type: String, maxLenght: 400, require: true },
    email:{type: String, maxLenght: 400, required: true}
});
module.exports = mongoose.model("doctores", doctorSchema);