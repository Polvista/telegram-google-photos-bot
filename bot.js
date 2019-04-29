const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const { getAlbums } = require('./photosApi');

dotenv.config();

const bot = new TelegramBot(process.env.TOKEN, {
    polling: true,
    baseApiUrl: process.env.BOT_API
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    if (msg.text === 'albums') {
        try {
            const albums = await getAlbums(process.env.PHOTOS_USER_TOKEN);
            bot.sendMessage(chatId, 'done');
        } catch(e) {
            bot.sendMessage(chatId, 'nope');
            console.log('err', e);
        }
        return;
    }

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});

bot.on('polling_error', (error) => {
    return error;
});