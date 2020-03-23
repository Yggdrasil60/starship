// Imports
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

// Sequelize init
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

// Discord user
class User extends Model{}

User.init({
	id: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	money: {
		type: Sequelize.INTEGER,
		defaultValue: 10000
	}
}, {
	sequelize,
	modelName: "user",
	timestamps: false
});


// Sync the model with the database
sequelize.sync();

// Exports
exports.sequelize = sequelize;
exports.User = User;
