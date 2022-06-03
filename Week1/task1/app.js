const {Telegraf} = require('telegraf');
const schedule = require('node-schedule');

const bot = new Telegraf('5469680110:AAHfVF1cSoFEma5yMcp9_beORl0_ZIJPiZo');
bot.start((ctx) => ctx.reply('ДД.ММ.ГГГГ'));

bot.on('text', (ctx) => {

    console.log(ctx.update.message.text)    
    //ctx.telegram.sendMessage(ctx.message.chat.id, 'Hello ${ctx.state.role}')
    //ctx.reply('Hello ${ctx.state.role}')

    const date = new Date(ctx.update.message.text);
    const job = schedule.scheduleJob(date, () => {
        console.log('');
        ctx.reply('hello ${ctx.state.role}')
    })

});

bot.launch();