const controller  = require("../controllers/filmesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.post("/cadastrar", controller.cadastrarFilmes)
router.get("/title", controller.getByTitle)
router.get("/genre", controller.getByGenre)
router.get("/:id", controller.getById)
router.put("/:id", controller.putFilmes)
router.patch("/atualizar/:id", controller.patchFilmes)
router.delete("/:id", controller.deleteFilme)


module.exports = router 