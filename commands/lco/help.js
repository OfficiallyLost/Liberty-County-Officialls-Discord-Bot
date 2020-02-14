const Discord = require('discord.js');

module.exports = {
	name: 'help',

	execute(message) {
		const client = message.client;
		let embed = new Discord.RichEmbed()
			.setColor('#0094FF')
			.setAuthor(
				'I have ' + client.commands.size + ' commands!',
				'https://cdn.discordapp.com/attachments/675755334526304266/676571885949026304/LCORP2.png'
			)
			.setDescription(
				'**!help** - *Shows you a list of commands, this command.*\n**!invite** - *Gives you a Discord invite of LCO RP*\n**!website** - *Gives you a link to the Official LCO Website*\n**!register** - *Gives you the document to register as an official member!*\n**!apply** - *Helps you apply for what you would like to be*\n**!report** - *Reports a user sending to moderators*\n**!appeal** - *Appeal documents, feel free to appeal*'
			);
		if (!message.member.hasPermission('MANAGE_MESSAGES')) {
			embed.addField(
				'Mod Commands!',
				'**!dm** - *Pretty straight forward.*\n**!startup** - *Provides an embed to start a server!*'
			);
		}

		message.channel.send(embed);
	}
};
