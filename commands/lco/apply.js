const Discord = require('discord.js');

module.exports = {
	name: 'apply',

	execute(message) {
		const filter = (m) => m.content.includes('option1') || m.content.includes('option2');
		let dot = new Discord.RichEmbed()
			.setColor('#0094FF')
			.setAuthor(message.guild.name, message.guild.iconURL)
			.setTitle('Almost there!')
			.setDescription('<a:LCORPGIF:675902098931580938> You chose DOT!')
			.addField(
				'Department of Transport',
				'You are constantly on the move, you work for everyone. Crime scene "DOT Please!", car crash "DOT Please!", out of gas "DOT Please!". You are meant to be there for everyone, if not there are consequences, there are people to face.'
			)
			.addField(
				'LCDT',
				'To apply for the LCDT, please [click here](https://docs.google.com/forms/d/e/1FAIpQLScHdBohWYWV_TsI7enVnp3wpNzhSO8lJP-7Ssmeoxa-CjIHWQ/viewform?usp=sf_link)'
			);
		let fire = new Discord.RichEmbed()
			.setColor('#0094FF')
			.setAuthor(message.guild.name, message.guild.iconURL)
			.setTitle('Almost there!')
			.setDescription('<a:LCORPGIF:675902098931580938> You chose Fire/EMS! ')
			.addField(
				'Fire & EMS',
				'You want to live a dangerous life, families depend on you. No one has dares to walk into a burning building, you are not the same. You are the hardest of all people, "this is a mens job". No, we want god chemistry in our crew, as long as you have that, your good to go.'
			)
			.addField(
				'FCFR',
				'To apply for the RCFR, please [click here](https://docs.google.com/forms/d/e/1FAIpQLSdcu7aSVIJ7ZN3HyoMYh3XlqfBiMiKINk_0kGhEXWg-aYCY8g/viewform?usp=sf_link)'
			);
		let leo = new Discord.RichEmbed()
			.setColor('#0094FF')
			.setAuthor(message.guild.name, message.guild.iconURL)
			.setDescription('<a:LCORPGIF:675902098931580938> You chose LEO!')
			.setTitle('Almost there!')
			.addField(
				'Law Enforcement',
				'You are the underdogs, you are the cleaners cleaner. You are my hero. The ones who are up and night, watching you safely walk home, they have a target on their, but for them. You are the ones with it and nothing will stop them.',
				true
			)
			.addField(
				'RCPD',
				'To apply for the RCPD, please [click here](https://docs.google.com/forms/d/e/1FAIpQLSdIKeGs2T31Rpz4AXEBb8LzcRrK04scuEIzjpaZKTnBS7ckwg/viewform?usp=sf_link)'
			)
			.addField(
				'LCSO',
				'To apply for the LCSO, please [click here](https://docs.google.com/forms/d/e/1FAIpQLSd_DAaZTOv3-7k3CokG7ubRzhtxLbw0zNfERrE_MKLDiYDSIQ/viewform?usp=sf_link)'
			);

		let embed = new Discord.RichEmbed()
			.setColor('#0094FF')
			.setAuthor(message.guild.name, message.guild.iconURL)
			.setDescription(` ${message.author}, what would you like to apply for today?`)
			.addField(
				' Law Enforcement',
				'Save peoples lives for a living, risk your lives for the people of Liberty County, **you** are the soldiers which dont get the recognition, the ones who are looked fown upon, the real heroes.\n**To apply, send `LEO`**'
			)
			.addField(
				'Fire/EMS',
				"Live the life of a paramedic Or a figherfighter, tackling dangerous things, people put their lives into your hand. There are no breaks when lives are to be saved, when people need you the most, you'll know.\n**To apply, send `FIRE/EMS`**"
			)
			.addField(
				' DOT',
				'You live in a truck, you are in your truck most of your day, if you wanna have a nice relaxing life. This is not your job. This is for the toughest of the toughest, only few can make it.\n**To apply, send `DOT`**'
			)
			.setTitle('You have 30 seconds.');

		message.channel.send(embed);
		const collector = new Discord.MessageCollector(message.channel, (m) => m.author.id === message.author.id, {
			time: 30000
		});
		collector.on('collect', (message) => {
			if (message.content == 'FIRE/EMS') {
				message.channel.send(fire);
			} else if (message.content == 'LEO') {
				message.channel.send(leo);
			} else if (message.content == 'DOT') {
				message.channel.send(dot);
			}
		});
	}
};
