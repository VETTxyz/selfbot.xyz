const Discord = require('legend.js'); /// dependência do legend.js: https://www.npmjs.com/package/legend.js
const client_self = new Discord.Client();

client_self.on('ready', () => { /// Quando o bot ligar
  console.log(`iniciado em: ${client.user.tag}.`); /// console.log indicando o nome da conta;
  client_self.user.setPresence({
    game: {
      name: "Teste", /// Coloque seu título de transmissão;
      type: "STREAMING", /// Streaming;
      url: 'https://www.twitch.tv/vettxyz_' /// Coloque a sua Stream;
    },
  });
})

client_self.login("") /// Coloque o token da sua conta;
