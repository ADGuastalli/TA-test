const { Router } = require("express");
const datacontrollers = require("../controllers/controllers");

const router = Router();

router.get("/soyTA", datacontrollers.getData);

module.exports = router;
