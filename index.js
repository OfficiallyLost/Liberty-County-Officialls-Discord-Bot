const Discord = require('discord.js');
const fs = require('fs');

const { prefix } = require('./config.json');
const client = new Discord.Client();
const config = require('./config.json');

client.commands = new Discord.Collection();
fs.readdirSync('./commands/').forEach((dir) => {
	const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${dir}/${file}`);
		client.commands.set(command.name, command);
	}
});

client.on('ready', () => {
	console.log(`Users:${client.users.size}  Channels:${client.channels.size}  Guilds:${client.guilds.size}`);

	const activities = [ `LCORP | !help` ];

	setInterval(() => {
		let activity = activities[Math.floor(Math.random() * activities.length)];
		client.user.setActivity(activity, { type: 'WATCHING' });
	}, 3000);
});

client.on('message', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) {
		console.log(message.content);
	} else
		try {
			client.commands.get(command).execute(message, args);
		} catch (error) {
			console.log(error);
			message.channel.send(
				'<:dnd:668322768995221536> There was an error trying to execute `' +
					message.content +
					'` Please try again. If this issue persists, please contact support'
			);
		}
});
client.login(config.token);
