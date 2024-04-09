//6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
// peso ideal de homem = (72,7 x altura) – 58
// peso ideal da mulher = (62,1 x altura) – 44,7

const express = require('express');
const app = express();

app.use(express.json());

app.post('/peso-ideal', (req, res) => {
  const { altura, sexo } = req.body;

  if (!altura || !sexo) {
    return res.status(400).json({ error: 'Por favor, forneça a altura e o sexo.' });
  }

  let pesoIdeal;
  if (sexo.toLowerCase() === 'masculino') {
    pesoIdeal = (72.7 * altura) - 58;
  } else if (sexo.toLowerCase() === 'feminino') {
    pesoIdeal = (62.1 * altura) - 44.7;
  } else {
    return res.status(400).json({ error: 'Sexo inválido. Por favor, informe "masculino" ou "feminino".' });
  }

  res.json({ pesoIdeal });
});

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000/peso-ideal")
});
