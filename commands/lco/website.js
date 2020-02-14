const Discord = require('discord.js');

module.exports = {
	name: 'website',
	execute(message) {
		let embed = new Discord.RichEmbed()
			.setAuthor("Here is LCORPs' website!", message.guild.iconURL)
			.setDescription(
				"Ah, yes! LCORP's very own website! Full with all necessities which are needed to build your way to the top! Become knowledgeable, be the best, and become a cool kid!"
			)
			.setFooter('hey you! yes you. You are a cool kid!')
			.addField('Website', '[Official LCORP Website](https://sites.google.com/view/lcdojrp/home)', true)
			.addField('Discord Invite', '[Permanent Discord Invite](https://discord.gg/qd7TRxF)', true)
			.setImage(`https://tenor.com/rpCx.gif`)
			.setColor('#0094FF')
		message.channel.send(embed);
	}
};
