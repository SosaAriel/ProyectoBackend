const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const validateID = require("../middleware/validateID");
const { check } = require("express-validator");

router.get("/usuario", apiController.usuario);
router.get("/lista", apiController.lista);
router.get("/listById/:id", validateID, apiController.listById);
router.post("/crear", [
    check("nombre").not().isEmpty().withMessage("Debe elegir un pokemon"),
    check("vivo").not().isEmpty().withMessage("Estado del pokemon"),
    check("nivel").not().isEmpty().withMessage("Nivel de captura"),
], apiController.crear);
router.put("/editar/:id", validateID, [
    check("nombre").not().isEmpty().withMessage("Que pokemon debe modificar"),
    check("vivo").not().isEmpty().withMessage("Estado del pokemom"),
    check("nivel").not().isEmpty().withMessage("Nuevo nivel alcanzado"),
], apiController.editar);
router.delete("/eliminar/:id", validateID, apiController.eliminar);

module.exports = router;