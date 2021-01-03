'use strict';
require('dotenv').config();

const discord = require('discord.js')
const client = new discord.Client();
const Ector = require('ector');
const bot = new Ector('sugar babe', 'daddy');


client.on('message', async (msg) => {
    if (msg.channel.id === process.env.GENERAL_CHAT){
        let message = msg.content;
        bot.addEntry(message);
        let response = bot.generateResponse();
        await msg.reply(response.sentence)
    }
})
client.login(process.env.BOT_TOKEN).catch((err) => {
    if (err) throw err;
    console.log('bot ready!')
})