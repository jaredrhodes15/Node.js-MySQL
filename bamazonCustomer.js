var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password1234!",
    database: "bamazon"
});

    connection.connect(function(err) {
        if (err) throw err;
        console.log(err);

        console.log("Listening on port 3306")
        // run my program
        // Similar to top songs, but this is starter code for the homework.  Purpose is to get sequel queries down
        // read in mysql documentation about how queries work -- helpful for homework
    });

    function start(){
        //Printing Out Products
        connection.query('SELECT * FROM products', function(err, res){
          if(err) throw err;
          console.log('!!Welcome to Bamazon -- Your CLI Web Purchase!!')
          console.log('------------------------------------------------------------------------') 
          console.table(res);
        
        
          for(var i = 0; i<res.length;i++){
            console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
            console.log('--------------------------------------------------------------------------------------------------')
          }
        
          console.log(' ');
          inquirer.prompt([
            {
              type: "input",
              name: "id",
              message: "What is the ID of the product you would like to purchase?",
              validate: function(value){
                if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
                  return true;
                } else{
                  return false;
                }
              }
            },
            {
              type: "input",
              name: "qty",
              message: "How many would you like to purchase?",
              validate: function(value){
                if(isNaN(value)){
                  return false;
                } else{
                  return true;
                }
              }
            }
            ]).then(function(ans){
              var whatToBuy = (ans.id)-1;
              var howMuchToBuy = parseInt(ans.qty);
              var grandTotal = parseFloat(((res[whatToBuy].price)*howMuchToBuy).toFixed(2));
        
              //check to see if enough quantity
              if(res[whatToBuy].stock_quantity >= howMuchToBuy){
                //update database after success
                connection.query("UPDATE products SET ? WHERE ?", [
                {stock_quantity: (res[whatToBuy].stock_quantity - howMuchToBuy)},
                {item_id: ans.id}
                ], function(err, result){
                    if(err) throw err;
                    console.log("---------------------Purchase Total So Far $" + grandTotal.toFixed(2));
                });
        
        
              } else{
                console.log("We don't have enough in stock to fill this order!");
              }
        
              reprompt();
            })
        })
        }
        
        //Purchase another item?
        
        start();
        function reprompt(){
          inquirer.prompt([{
            type: "confirm",
            name: "reply",
            message: "Would you like to purchase another item?"
          }]).then(function(ans){
            if(ans.reply){
              start();
            } else{
              console.log("Thanks for Shopping at UofU Bamazon!");
            }
          });
        }

    
    function productSearch() {
        var query = "SELECT * FROM products";
        connection.query(query, function(err, res) {
          console.table(res);
        });
    }