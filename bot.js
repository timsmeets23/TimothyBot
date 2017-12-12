const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('OH HELLLOWWWWW...');
    }
    if (message.content === ':0') {
        message.reply('Oh.. no.. no.. honey.. honey.. no');
    }
    if (message.content === 'matt') {
        message.reply('What..');
    }
    if (message.content === 'peridot') {
        message.channel.send("Test", {
        file: "https://i.pinimg.com/originals/31/75/0f/31750ffc2bae0e98a3fbe4a172be621a.jpg" // Or replace with FileOptions object
        });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
