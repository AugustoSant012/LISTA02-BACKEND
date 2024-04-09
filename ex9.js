/*9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação.*/

    const express = require('express');
const app = express();

app.use(express.json());

function calcularSalario(salarioMinimo, horasTrabalhadas, dependentes, horasExtras) {
 
  const valorHora = salarioMinimo / 5;
  
  let salarioMes = horasTrabalhadas * valorHora;
  
  const acrescimoDependentes = dependentes * 32;
  
  const valorHoraExtra = valorHora * 1.5;
  const salarioHorasExtras = horasExtras * valorHoraExtra;
  
  let salarioBruto = salarioMes + acrescimoDependentes + salarioHorasExtras;
  
  let irrf;
  if (salarioBruto <= 2000) {
    irrf = 0;
  } else if (salarioBruto <= 5000) {
    irrf = salarioBruto * 0.1;
  } else {
    irrf = salarioBruto * 0.2;
  }
  
  const salarioLiquido = salarioBruto - irrf;
  
  let gratificacao;
  if (salarioLiquido <= 3500) {
    gratificacao = 1000;
  } else {
    gratificacao = 500;
  }
  
  const salarioReceber = salarioLiquido + gratificacao;

  return {
    salarioMes,
    acrescimoDependentes,
    salarioHorasExtras,
    salarioBruto,
    irrf,
    salarioLiquido,
    gratificacao,
    salarioReceber
  };
}

app.post('/calcular-salario', (req, res) => {
  const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body;

  if (!salarioMinimo || !horasTrabalhadas || !dependentes || !horasExtras) {
    return res.status(400).json({ error: 'Por favor, forneça todas as informações necessárias.' });
  }

  const resultado = calcularSalario(salarioMinimo, horasTrabalhadas, dependentes, horasExtras);

  res.json(resultado);
});


app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000/calcular-salario")
});
