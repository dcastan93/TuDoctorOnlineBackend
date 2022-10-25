
//importaciones
const express = require("express"); //se importa express y esta crea una carpeta nde_modules
//la carpeta node_modules no se agrega a git, se hace un git ignore
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("./conection")

//configurCIONES
const env = process.env;
const app = express();
app.use(express.json());//interpreta la estructura como un objeto.json
const port =env.PORT || 3000;
app.use(morgan("dev"));
app.use(cors());

//arranque
app.listen(port,()=>{
    console.log("Api iniciado en el puerto "+ port)
})

//rutas
app.get("/", (request, response)=>{
    response.send("API iniciado, arrancamos")
})
app.use("/especialidades", require("./routers/EspecialidadRutas"))
app.use("/doctores", require("./routers/DoctorRutas"))
app.use("/pacientes", require("./routers/PacienteRutas"))



