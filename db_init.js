const dal = require ('./db_model.js');

// Resets the database
dal.sequelize.sync({force: true})
.then(() => {
	console.log("Successfully reseted the database");

	// Adds the generators the database
	dal.Generator.create({name: "generator mark1", capacity: 10, price: 1000}).catch(console.error);
	dal.Generator.create({name: "generator mark2", capacity: 15, price: 2000}).catch(console.error);
	dal.Generator.create({name: "generator mark3", capacity: 20, price: 3000}).catch(console.error);
	dal.Generator.create({name: "generator mark4", capacity: 25, price: 4000}).catch(console.error);
	console.log("Successfully inserted the generators");
})
.catch(console.error);


