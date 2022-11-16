const citasOperaciones = require("../operations/citasOperaciones")
const router = require("express").Router();

router.get("/", citasOperaciones.consultarCitas); //este es el enpoint de consulta de especialidades
router.post("/", citasOperaciones.crearCita);//este es el enpoint de creacion de especialidades
router.get("/:id", citasOperaciones.consultarCita);//este es el enpoint de consulta especifica de especialidad
router.put("/:id", citasOperaciones.modificarCita);
router.delete("/:id", citasOperaciones.borrarCita);

module.exports = router;