//5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

// Salários até 2.000, reajuste de 50%
// Salários maiores que 2.000, reajuste de 30%

const express = require('express');
const app = express();

app.use(express.json());

app.post('/salario-reajustado', (req, res) => {
  const { salario } = req.body;

  if (!salario) {
    return res.status(400).json({ error: 'Por favor, forneça o salário do funcionário.' });
  }

  let salarioReajustado;
  if (salario <= 2000) {
    salarioReajustado = salario * 1.5; 
  } else {
    salarioReajustado = salario * 1.3; 
  }

  res.json({ salarioReajustado });
});


app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000/salario-reajustado")
});
