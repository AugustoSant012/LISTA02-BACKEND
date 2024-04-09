//2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. 
//Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou 
//uma mensagem caso o funcionário não tenha direito ao aumento.

const express = require('express');
const app = express();

app.use(express.json());

app.post('/aumento-salarial', (req, res) => {
  const { salario } = req.body;

  if (salario < 1000) {
    const salarioReajustado = salario * 1.3; 
    res.json({ salarioReajustado });
  } else {
    res.json({ message: 'Esse funcionário não tem direito ao aumento.' });
  }
});


app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000/aumento-salarial")
});
