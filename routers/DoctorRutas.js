const doctorOperaciones = require("../operations/doctorOperaciones")
const router = require("express").Router();

router.get("/", doctorOperaciones.consultarDoctores); //este es el enpoint de consulta de especialidades
router.post("/", doctorOperaciones.crearDoctor);//este es el enpoint de creacion de especialidades
router.get("/:id", doctorOperaciones.consultarDoctor);//este es el enpoint de consulta especifica de especialidad


module.exports = router;