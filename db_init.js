const dal = require ('./db_model.js');

// Resets the database
dal.sequelize.sync({force: true})
.then(() => {
	console.log("Successfully reseted the database");

	// Adds the reactors to the database
	dal.Reactor.create({name: "Reactor mark1", capacity: 10, basePrice: 1000}).catch(console.error);
	dal.Reactor.create({name: "Reactor mark2", capacity: 15, basePrice: 2000}).catch(console.error);
	dal.Reactor.create({name: "Reactor mark3", capacity: 20, basePrice: 3000}).catch(console.error);
	dal.Reactor.create({name: "Reactor mark4", capacity: 25, basePrice: 4000}).catch(console.error);

	// Adds the weapons to the database
	dal.Weapon.create({name: "Laser mark1", type: "laser", baseDamage: 10, basePrice: 2000, powerConsumption: 3 })
	dal.Weapon.create({name: "Missile mark1", type: "missile", baseDamage: 20, basePrice: 2000, powerConsumption: 4, loadingTime: 2 })
	dal.Weapon.create({name: "Ion mark1", type: "laser", baseDamage: 5, basePrice: 2000, powerConsumption: 3 })
})
.then(() => {
	console.log("Successfully initialized the database");
})
.catch(console.error);


