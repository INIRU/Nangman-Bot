const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./Database/config.json');

const client = new Client({ intents: GatewayIntentBits.Guilds });

client.login(token);
