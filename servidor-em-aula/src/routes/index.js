const express = require("express")
const router = express.Router()

router.get("/", (request, response) => {
    response.status(200).json({
        "titulo": "API Posts", 
        "version": "1.0.0", 
        "mensagem": "Bem Vindo"
    })
})

module.exports = router 