//1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = 
//(QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.

const express = require('express');

const app = express();

app.use(express.json());

app.post('/estoque-medio', (req, res) => {
  const { quantidadeMinima, quantidadeMaxima } = req.body;

  if (!quantidadeMinima || !quantidadeMaxima) {
    return res.status(400).json({ error: 'Por favor, forneça a quantidade mínima e máxima.' });
  }

  const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;
  res.json({ estoqueMedio });
});

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000/estoque-medio")
})