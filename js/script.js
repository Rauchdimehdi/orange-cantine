
                        
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();
var dynamodb = new AWS.DynamoDB();

//Create a queary 


var params = {

    Key: {
       "id": {
            N: '10'
        },
       "nombre": {
            N: '4'
        }
    },
    TableName : "mydb"
    
};

dynamodb.getItem(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data); 
});

                    