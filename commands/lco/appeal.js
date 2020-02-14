const Discord = require('discord.js');
module.exports = {
	name: 'appeal',
	guildOnly: true,

	execute(message, args) {
		let embed = new Discord.RichEmbed()
			.setColor('#0094FF')
			.setAuthor(message.guild.name, message.guild.iconURL)
			.setTitle('You have 30 seconds.')
			.setDescription(`${message.author}, what do you need to appeal with today?`)
			.addField(
				'Mark Appeals',
				'If you got a strike doing whatever you done. You may have recieved a strike, you may appeal here. This is not a 100% guaranteed removal of your warning.\n**To apply, send `mark appeals`**'
			)
			.addField(
				'Discord Ban Appeals',
				'If you have ever received a Discord ban, whether permanent or temporary you are eliglible to apply. This is not a 100% guaranteed postion back in LCORP. If you do not get accepted, please do not complain.\n**To apply, send `ban appeals`**'
			);
		let ban = new Discord.RichEmbed()
			.setColor('#0094FF')
			.setAuthor(message.guild.name, message.guild.iconURL)
			.addField(
				'Discord Ban Appeals',
				'If you have got banned/receiving the document for a ban appeal for a friend, you may [click here.](https://docs.google.com/forms/d/1uO6spjYC6fJkBCMSnawf89Jx6CMqIpuoru0Bf__kUnw/edit)'
			);
		let mark = new Discord.RichEmbed()
			.setColor('#0094FF')
			.setAuthor(message.guild.name, message.guild.iconURL)
			.addField(
				'Mark Appeals',
				'If you recieved a strike, you may click [this link.](https://forms.gle/kv6yqt3uLFvrXCUj8)'
			);

		message.channel.send(embed);
		const collector = new Discord.MessageCollector(message.channel, (m) => m.author.id === message.author.id, {
			time: 30000
		});
		collector.on('collect', (message) => {
			if (message.content == 'mark appeals') {
				message.channel.send(mark);
			} else if (message.content == 'ban appeals') {
				message.channel.send(ban);
			}
		});
	}
};
