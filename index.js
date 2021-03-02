const { Collection, Client, Discord, MessageEmbed } = require('discord.js');
const bot = new Client({ disableEveryone: true, partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const fs = require('fs');
const { token } = require('./config.json');

bot.cooldown = new Collection();
bot.ticketCategory = '814615460976918541';
bot.prefix = '-';
bot.token = token;
bot.website = 'https://Techybot-30.mrtechy11.repl.co';
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.login(token);