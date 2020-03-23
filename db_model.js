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

// Spaceship model
class ShipModel extends Model{}

ShipModel.init({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	weaponsSlots: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 2
	}
}, {
	sequelize,
	modelName: "shipModel",
	timestamps: false
});

// Spaceship Reactor
class Reactor extends Model{}

Reactor.init({
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
	basePrice: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
}, {
	sequelize,
	modelName: "reactor",
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
	shipModelID: {
		type: Sequelize.INTEGER,
		references: {
			model: ShipModel,
			key: "id"
		}
	},
	ReactorID: {
		type: Sequelize.INTEGER,
		references: {
			model: Reactor,
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
exports.Reactor = Reactor;
exports.Spaceship = Spaceship;
