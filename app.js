const {Telegraf} = require('telegraf');

const bot = new Telegraf('5469680110:AAHfVF1cSoFEma5yMcp9_beORl0_ZIJPiZo');

bot.start((ctx) => ctx.reply('Welcome'));
bot.launch();