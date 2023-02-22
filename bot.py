const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.Client();
const TARKOV_CHANGES_API_KEY = '3d7302b087dc5dc08fd7';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.content === '!updates') {
    try {
      const response = await axios.get('https://tarkov-changes.com/api/v1/changelog', {
        headers: {
          'Authorization': `Bearer ${TARKOV_CHANGES_API_KEY}`,
        },
      });
      const updates = response.data;
      let updateMessage = '';
      updates.forEach((update) => {
        updateMessage += `${update.date} - ${update.change}\n`;
      });
      message.channel.send(updateMessage);
    } catch (error) {
      console.error(error);
      message.channel.send('Error retrieving updates.');
    }
  }
});

client.login('YOUR_DISCORD_TOKEN_HERE');
