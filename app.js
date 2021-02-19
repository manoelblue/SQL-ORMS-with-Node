const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db'
});

// Movie model
class Movie extends Sequelize.Model {}
// creates a table Movies (automatically goes to plural)
Movie.init({
    title: Sequelize.STRING
}, {sequelize});

//async IIFE
(async () => {
    // Sync 'Movies' table
    // refresh db everytime app starts:
    await Movie.sync();
    // to force sync of all models:
    // await sequelize.sync({force: true});

    // Test the connection:
    try {
        // returns a promise that resolves to a successful,
        // authenticated connection to the database:
        await sequelize.authenticate();
        console.log('Connection to the database successful!');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
}) ();