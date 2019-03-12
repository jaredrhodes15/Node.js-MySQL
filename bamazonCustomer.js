var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

    connection.connect(function(err) {
        if (err) throw err;
        console.log(err);
        // run my program
        // Similar to top songs, but this is starter code for the homework.  Purpose is to get sequel queries down
        // read in mysql documentation about how queries work -- helpful for homework
    });
