module.exports = {
	name: "register",
	execute: (message, args) => {

		//If the user does not exist within the database, it is registered with 10k starting money

		const dal = require('../db_init.js');

		let user;

		dal.User.findAll({
			attributes: [[dal.sequelize.fn('COUNT', dal.sequelize.col('id')), "userExists"]],
			where: {
				id: message.author.id
			}
		})
		.then(query => {
			if (query[0].dataValues.userExists == 0) {
				dal.User.create({id: message.author.id})
				.then(() => message.reply(`You have been succesfully registered`))
				.catch(console.error);
			} else {
				message.reply(`You are already registered`);
			}
		})
		.catch(console.error);
	}
}