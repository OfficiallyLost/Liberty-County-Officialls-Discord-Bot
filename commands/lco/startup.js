const Discord = require('discord.js');

module.exports = {
	name: 'startup',
	info: 'SSU tingy',

	execute(message, args) {
		message.delete();
		let embed = new Discord.RichEmbed()
			.setTitle('Official Server Start Up!')
			.setTimestamp()
			.setDescription('Starting a regular session!')
			.setAuthor('SSU Time!', message.guild.iconURL)
			.addField(`Host`, `<@${message.author.id}>`, true)
			.setThumbnail(message.guild.iconURL)
			.setColor('#0094FF')
			.addField(
				'Things',
				`Please read <#663064444036710410>. There may be something which you may have to note.`,
				true
			)
			.addBlankField()
			.addField(
				'Server Info',
				'The game name will be: `Liberty County Officials || RolePlay.`\nThe game invite code will be: `FoLPb`. '
			)
			.addField(
				'Game Info',
				'Please join us in roleplaying by [clicking here to get a direct link to ER:LC](https://www.roblox.com/games/2534724415/Emergency-Response-Liberty-County)'
			);
		message.channel.send(embed).then((e) => e.react('✅'));
	}
};
