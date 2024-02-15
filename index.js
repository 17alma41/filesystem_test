const express = require('express');

const app = express();

app.get("/hola", (req, res) => {
    res.send("holaa")
});

app.listen(3000, () =>{
    console.log("Servidor andando en el puerto 3000")
});

