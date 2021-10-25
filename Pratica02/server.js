const express =  require("express");// Carrega o framework Express
const app = express(); // Construtor que inicializa uma aplicação Express
app.listen(3000,() => console.log(`A ouvir na porta 3000`));
app.use(express.static("public"));