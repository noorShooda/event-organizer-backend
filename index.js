const express = require('express');
const app = express();
const port = 2000;

const sucessSetup = function(error){
    console.log("Success opening port !");
};

const getTest = function(request, response){
    console.log("sucess get",request);
    const myObj = {
        msg : "hello"
    };

    response.send(myObj);
};

app.get('/:id',getTest);

app.listen(port,sucessSetup);