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

// Spaceship generator
class Generator extends Model{}

Generator.init({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	capacity: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
}, {
	sequelize,
	modelName: "generator",
	timestamps: false
});

// Spaceship
class Spaceship extends Model{}

Spaceship.init({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	generatorID: {
		type: Sequelize.INTEGER,
		references: {
			model: Generator,
			key: "id"
		}
	}
}, {
	sequelize,
	modelName: "spaceship",
	timestamps: false
});

// Sync the model with the database
sequelize.sync();

// Exports
exports.sequelize = sequelize;
exports.User = User;
exports.Generator = Generator;
exports.Spaceship = Spaceship;
