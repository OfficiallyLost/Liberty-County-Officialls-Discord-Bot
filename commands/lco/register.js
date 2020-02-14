const Discord = require('discord.js');

module.exports = {
	name: 'register',
	execute(message) {
		let embed = new Discord.RichEmbed()
			.setAuthor('Hey there ' + message.author.username + ' ')
			.setDescription(
				'To register to become an Official LCO Members, please [click here](https://docs.google.com/forms/u/1/d/1Cs1mtJwsiixQGgbNTwI691FzJrgp1ds6OStvJe80VFo/edit).'
			)
			.setTitle('Thank you for considering being with us!')
			.setFooter('Register as an Official LCORP Member!')
			.setColor('#0094FF');

		message.channel.send(embed);
	}
};
