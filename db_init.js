const dal = require ('./db_model.js');

// Resets the database
dal.sequelize.sync({force: true})
.then(() => {
	console.log("Successfully reseted the database");

	// Adds the reactors the database
	dal.Reactor.create({name: "Reactor mark1", capacity: 10, basePrice: 1000}).catch(console.error);
	dal.Reactor.create({name: "Reactor mark2", capacity: 15, basePrice: 2000}).catch(console.error);
	dal.Reactor.create({name: "Reactor mark3", capacity: 20, basePrice: 3000}).catch(console.error);
	dal.Reactor.create({name: "Reactor mark4", capacity: 25, basePrice: 4000}).catch(console.error);
	console.log("Successfully inserted the reactors");
})
.catch(console.error);


