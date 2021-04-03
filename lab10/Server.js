import Express from 'express';
import Database from "./Database.js";

const Database = new Database();
const App = Express();
const port = 45030;

Database.connect()

  App.put("/people/create", (req, res) => {
  
    const person = Database.createOne(req.body.firstName, req.body.lastName, req.body.favoriteColor)
    res.json(person)
    });

  App.get("/people/:person", (req, res) => {
  
    const person = Database.readOne()
    res.json(person)
    });
    
  App.listen(port, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      port,
      port
    );
  });