const pacientesOperaciones = require("../operations/pacientesOperaciones")
const router = require("express").Router();

router.get("/", pacientesOperaciones.consultarPacientes); //este es el enpoint de consulta de especialidades
router.post("/", pacientesOperaciones.crearPaciente);//este es el enpoint de creacion de especialidades
router.get("/:id", pacientesOperaciones.consultarPaciente);//este es el enpoint de consulta especifica de especialidad


module.exports = router;