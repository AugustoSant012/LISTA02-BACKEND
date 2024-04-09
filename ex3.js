//3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas
// e o percentual que ganha sobre o total de vendas. 
//Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total.

const express = require('express');
const app = express();

app.use(express.json());

app.post('/salario-vendedor', (req, res) => {
  const { nome, salarioFixo, totalVendas, percentualComissao } = req.body;

  if (!nome || !salarioFixo || !totalVendas || !percentualComissao) {
    return res.status(400).json({ error: 'Por favor, forneça todas as informações necessárias.' });
  }

  const salarioTotal = salarioFixo + (totalVendas * percentualComissao / 100);
  res.json({ nome, salarioTotal });
});


app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000/salario-vendedor'")
});
