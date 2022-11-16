const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema({
    nombre_Doctor:{type: String, maxLenght: 400, require: true},
    apellidos_Doctor:{type: String, maxLenght: 400, require: true},
    especialidad:{type: String, maxLenght: 400, require: true},
    disponibilidad_Horaria:{type: [String], maxLength: 20, require: true}, //acá va 
    telefono_Contacto: {type: String, maxLenght: 400, require: true, unique: true },
    email:{type: String, maxLenght: 400, required: true, unique: true},
    login:{type: String, maxLenght: 400, required: true, unique: true},
    passw: {type: String, require: true},
    es_admin: { type: Boolean, require: true}

});
module.exports = mongoose.model("doctores", doctorSchema);