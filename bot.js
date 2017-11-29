const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'delta') {
    	message.reply('Are You Ready Kids OOOOOOH Who ends in Pineapple and shit talks constantly DELTA PINEAPPLE He`s trashy and selfish and annoying (You see?) DELTA PINEAPPLE He has a big ego and acts like a bitch DELTA PINEAPPLE He`s nothing but drama and throws tons of fits! READY DELTA PINEAPPLE DELTA PINEAPPLE DELTA .. SHUT UP...... NO ONE LIKES YOU, YOU CAN LEAVE, GOODBYE!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
