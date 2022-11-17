const loginOperaciones = require("../operations/loginOperaciones")
const router = require("express").Router();

router.post("/", loginOperaciones.login);

module.exports = router