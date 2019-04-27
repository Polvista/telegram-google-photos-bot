import logging
import os

from telegram.ext import Updater, MessageHandler, Filters

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.ERROR)

updater = Updater(
    token=os.environ['TOKEN']
)

dispatcher = updater.dispatcher


def echo(update, context):
    print('new-message', update.message.text)
    context.bot.send_message(chat_id=update.message.chat_id, text=update.message.text)


echo_handler = MessageHandler(Filters.text, echo)
dispatcher.add_handler(echo_handler)

updater.start_polling()
