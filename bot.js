const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$69') {
    	message.reply('OH, COME ON!');
    }
    if (message.content === '$420') {
        message.reply('BLAZE IT!');
    }
    if (message.content === '$69420') {
        message.reply('69420 everytime :D #thanksGradeAUnderA');
    }
    if (message.content === '$meeseeks') {
        message.channel.send("Are you keeping your shoulders straight!!, OH YES SIR!", {
        file: "http://www.gstatic.com/tv/thumb/v22episodes/10443766/p10443766_e_v8_ab.jpg" // Or replace with FileOptions object
        });
    }
    if (message.content === '$skid') {
        message.reply("Don't you dare ask that!")
    }
    if (message.content === '$timmyturner') {
        message.reply("Timmy is an average kid, That no one understands, Mark and Alex and Matt always giving him commands. SCRIPT twirp!")
    }
    if (message.content === '$commandlist') {
        message.reply('$69,$420,$69420,$meeseeks,$skid,$timmyturner,$commandlist')
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
