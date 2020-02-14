const Discord = require('discord.js');

module.exports = {
	name: 'report',

	execute(message, args) {
		if (!args.length) {
			return message.channel.send('Please provide a report!');
		}
		let a = message.cleanContent.slice(7);

		message.guild.channels
			.get('676625642854285322')
			.send(
				`${a}\n\n**reporter:** ${message.author.username}(\`${message.author.id}\`\n**Channel:** ${message
					.channel.name}(\`${message.channel.id}\`)`
			);
	}
};
