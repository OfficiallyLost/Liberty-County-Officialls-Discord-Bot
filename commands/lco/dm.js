module.exports = {
	name: 'dm',
	execute(message, args) {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) {
			return message.channel.send("You're are not a server moderator!");
		}
		if (!args.length) {
			return message.channel.send('You need to provide a user to direct message!');
		}
		let dmP = message.mentions.members.first() || message.guild.members.get(args[0]);
		let me = args.slice(1).join(' ');
		if (!args.length) {
			return message.channel.send('Please provide something for me to direct message a user!');
		}

		dmP.send(`${me}\n\n**Moderator:** ${message.author}`);
		message.channel.send(`I've messaged ${dmP}!`).catch((e) => e.catch(message.channel.send('An error occured!')));
	}
};
