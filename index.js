console.log('Gamble bot running....');

const Discord = require('discord.js');
const bot = new Discord.Client();
var once=0;
var str="Negrodamus, ";
var firstCard, secondCard;
bot.on('message',(message)=>{

    if (once == 1){  // change to 0 to announce bot has logged on
        message.channel.send("```Degen Bot is online - type '=help' for commands```");
        once = once + 1;
    }
    if (message.content=="=help"){
        message.channel.send("\n\nping\n=help\n=payday\n");
    }
    if (message.content=="what is this"){
        message.channel.send(":duck: ***a cis male duck in italics, he's sensitive***");
    }
    if(message.content=='ping'){
        message.reply('pong');
    }
    if(message.content=='=payday'){
        message.channel.send('you get 1200 trumpbucks');
    }
    if(message.content=="=bj"){
        //message.channel.send("blackjack in construction");
        firstCard = rando();
        secondCard = rando();
        message.reply("your cards are " + firstCard + getSuit() + ", " + secondCard + getSuit());
        message.channel.send("hit, stay, or double?");

    }
    if(message.content=="did epstein kill himself?"){
        message.channel.send("not likely");
    }

});

function rando(min, max) {
    min = Math.ceil(2);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


function getSuit(){

    var whatsuit=0;

    while (whatsuit==0){
        var whatsuit = Math.floor(Math.random() * Math.floor(4));
    }

    switch(whatsuit) {
        case 1:
            return "\:spades:";
          break;
        case 2:
            return "\:clubs:";
          break;
        case 3:
            return "\:hearts:";
            break;
        case 4:
            return "\:diamonds:";
            break;
      }
}

bot.login('%BOTTOKENGOESHERE');  // add the secret bot token between ''
