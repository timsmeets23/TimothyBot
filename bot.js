const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '-hello') {
    	message.reply('OH HELLLOWWWWW...');
    }
    if (message.content === '-:o') {
        message.reply('Oh.. no.. no.. honey.. honey.. no');
    }
    if (message.content === '-matt') {
        message.reply('What..');
    }
    if (message.content === '-peridot') {
        message.channel.send("What's the point of corn....", {
        file: "https://i.pinimg.com/originals/31/75/0f/31750ffc2bae0e98a3fbe4a172be621a.jpg" // Or replace with FileOptions object
        });
    }
    if (message.content === '-commandlist') {
        message.reply('-hello,-:o,-matt,-peridot,-commandlist')
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
