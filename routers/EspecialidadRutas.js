const EspecialidadOperaciones = require("../operations/EspecialidadOperaciones")
const router = require("express").Router();

router.get("/", EspecialidadOperaciones.consultarEspecialidades); //este es el enpoint de consulta de especialidades
router.post("/", EspecialidadOperaciones.crearEspecialidad);//este es el enpoint de creacion de especialidades
router.get("/:id", EspecialidadOperaciones.consultarEspecialidad);//este es el enpoint de consulta especifica de especialidad
router.put("/:id", EspecialidadOperaciones.modificarEspecialidad);
router.delete("/:id", EspecialidadOperaciones.borrarEspecialidad);

module.exports = router;