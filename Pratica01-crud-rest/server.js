const express =  require("express");// Carrega o framework Express

const app = express(); // Construtor que inicializa uma aplicação Express

app.use(express.json()); //Faz o parse(validação e interpretação) de solicitações do tipo application/json

app.use(express.urlencoded({ extended : true })); // Faz o parse do conteúdo tipo application/x-www-form-urlencoded

app.get("/", (req,res) => {  // Cria uma "rota" simples com o verbo GET do HTTP
    res.json({ mensagem: "Bem-vindo à primeira aplicação CRUD-REST"})
});

require("./rotas/crudrest.rotas")(app);

const PORTA = process.env.PORT || 8080; // Estabelece a porta do servidor

app.listen(PORTA, () => {
    console.log(`O servidor está a ouvir na porta ${PORTA}`);
});
