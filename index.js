console.log('Gamble bot running....');

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message',(message)=>{
    if(message.content=='ping'){
        message.reply('pong');
    }
    if(message.content=='=payday'){
        message.channel.send('you get 1200 trumpbucks');
    }
    if(message.content=="=bj"){
        message.channel.send("blowjees not enabled yet");
    }
    if(message.content=="did epstein kill himself?"){
        message.channel.send("not likely");
    }

});

bot.login('MzA4NzgyOTQ5Njc4MTg2NDk2.Xq3cpA.-D4g4p79B1o0NsKncAicu35TjuE');
