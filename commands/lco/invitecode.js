const Discord = require('discord.js');

module.exports = {
	name: 'invite',

	execute(message) {
		let embed = new Discord.RichEmbed()
			.setTitle('So you would like to have the invite code for LCO huh?')
			.setTimestamp()
			.setURL('https://discord.gg/qd7TRxF', 'You can click here.')
			.setColor('#0094FF')
			.setDescription('[Or here](https://discord.gg/qd7TRxF)')
			.addField('Not here', 'But [here you can!](https://discord.gg/qd7TRxF)')
			.addField(
				'Actual code',
				'The actual invite code is https://discord.gg/qd7TRxF . Have fun and be sure to invite your friends!'
			)
			.setAuthor('This is cool isnt it? ')
			.addField('Whoever made this is so cool', '[have you tried clicking here?](https://discord.gg/qd7TRxF)');

		message.channel.send(embed);
	}
};
