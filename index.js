// Imports
const Discord = require('discord.js');
const config = require ('./config.json');
const fs = require('fs');

// Init and commands loading
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log('Ready!');
});

client.on('disconnect', () => {
  client.destroy().then(client.login(tokenDiscord));
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

if (!client.commands.has(commandName)) return;
const command = client.commands.get(commandName);

if (command.args && !args.length)  {
	let reply = `Missing arguments`;
	if (command.usage) {
		reply+= `\nCorrect usage is : \`${prefix}${command.name} ${command.usage}\``;
	}
	return message.channel.send(reply);
}
try {
	command.execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('There was an error trying to execute that command!');
}

});


client.login(config.token);
