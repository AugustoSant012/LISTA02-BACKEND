/*8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, 
conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule 
o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. 
Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
• 101 -> 5%
• 102 -> 7,5%
• 103 -> 10%*/

const express = require('express');
const app = express();

app.use(express.json());

function calcularNovoSalario(salario, codigoCargo) {
  let percentualAumento;

  switch (codigoCargo) {
    case 101:
      percentualAumento = 0.05;
      break;
    case 102:
      percentualAumento = 0.075;
      break;
    case 103:
      percentualAumento = 0.1;
      break;
    default:
      percentualAumento = 0.15; 
  }

  const novoSalario = salario * (1 + percentualAumento);
  const diferencaSalario = novoSalario - salario;

  return {
    salarioAntigo: salario,
    novoSalario,
    diferencaSalario
  };
}


app.post('/novo-salario', (req, res) => {
  const { salario, codigoCargo } = req.body;

  if (!salario || !codigoCargo) {
    return res.status(400).json({ error: 'Por favor, forneça o salário e o código do cargo.' });
  }

  const resultado = calcularNovoSalario(salario, codigoCargo);

  res.json(resultado);
});

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000/novo-salario")
});
