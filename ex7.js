//7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
//• O maior preço lido; e
//• A média aritmética dos preços dos produtos.

const express = require('express');
const app = express();

app.use(express.json());

app.post('/calcular-precos', (req, res) => {
  const produtos = req.body.produtos;

  if (!produtos || produtos.length !== 15) {
    return res.status(400).json({ error: 'Por favor, forneça 15 produtos com código e preço.' });
  }

  let maiorPreco = produtos[0].preco;
  let somaPrecos = produtos[0].preco;

  for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].preco > maiorPreco) {
      maiorPreco = produtos[i].preco;
    }
    somaPrecos += produtos[i].preco;
  }

  const mediaPrecos = somaPrecos / produtos.length;

  res.json({ maiorPreco, mediaPrecos });
});

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000/calcular-precos")
});
