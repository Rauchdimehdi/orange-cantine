var AWS = require("aws-sdk");

function getNumber(){
    

    AWS.config.update({
      region: "us-east-1"
    });

    var docClient = new AWS.DynamoDB.DocumentClient();
    var dynamodb = new AWS.DynamoDB();
    var n;

    //Create a queary 


    var params = {

        Key: {
           "id": {
                N: '11'
            },
           "nombre": {
                N: '0'
            }
        },
        TableName : "mydb"
        
    };


    dynamodb.getItem(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
       else console.log(data.Item); 
       //else alert(data.Item.nombre);
    });


    


    // test
    //var x=1;
    console.log(10);
    //alert(n);
    //document.getElementById("number") = x;
    
}

                    