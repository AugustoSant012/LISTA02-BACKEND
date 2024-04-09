//4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto
// levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância
/// Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media
// calculada> km/h.

const express = require('express');
const app = express();

app.use(express.json());

app.post('/velocidade-media', (req, res) => {
  const { nomePiloto, distanciaPercorrida, tempoLevado } = req.body;

  if (!nomePiloto || !distanciaPercorrida || !tempoLevado) {
    return res.status(400).json({ error: 'Por favor, forneça todas as informações necessárias.' });
  }

  const velocidadeMedia = distanciaPercorrida / tempoLevado;
  res.json({ mensagem: `A velocidade média do ${nomePiloto} foi ${velocidadeMedia} km/h.` });
});

app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000/velocidade-media")
});
