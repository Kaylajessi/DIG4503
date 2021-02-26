const express = require ('express');
//import React from 'react';
//import express from 'express';

const App = express();
const port = 45030;

App.get('/', (request, response)=> {
    response.send("Hello World!");
});

App.get('/person', (request, response)=> {
    response.send({name:"Kayla", color:"Purple"})
});

App.listen(port, ()=>{
    console.log("Kayla Purple!");
});