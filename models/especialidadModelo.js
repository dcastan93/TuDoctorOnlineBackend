const mongoose = require("mongoose");
const especialidadSchema = mongoose.Schema({
    nombreEspecialidad:{type: String, maxLenght: 400, require: true, unique: true},
    descripcion: {type: String, maxLenght: 400, require: true },
    atiende_solo_Mujeres:{type: Boolean, required: true}
});
module.exports = mongoose.model("Especialidades", especialidadSchema);