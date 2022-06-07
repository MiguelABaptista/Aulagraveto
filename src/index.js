const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Atividade antes da avaliação")
});

app.listen(port, () => {
    console.log("Servidor rodadando na porta 3000");
})

