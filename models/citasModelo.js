const mongoose = require("mongoose");
const citaSchema = mongoose.Schema({
    nombreEspecialidad:{type: String, maxLenght: 100, require: true, unique: true},
    medico: {type: String, maxLenght: 100, require: true },
    fechaAgenda:{type: Date, default: Date.now},
    nombrePaciente:{type: String, maxLenght: 100, require: true},
    apellidoPAciente:{type: String, maxLenght: 100, require: true},
    telefonoContacto:{type: String, maxLenght: 100, require: true},
});
module.exports = mongoose.model("citas", citaSchema);