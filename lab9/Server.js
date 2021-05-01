import Database from "./Portfolio2.js";
import express from "express";
import cors from "cors"

const app = express();
const PORT = 45030;

app.use(cors());
  
app.use(express.json());

Database.connect()

  App.put("/name/:name", (req, res) => {

    const listing = Database.createOne(req.params.name, req.body.price, req.body.bedrooms, req.body.beds)
    res.json(listing)
    });

  App.get("/name/:name", (req, res) => {
  
    const listing = Database.readOne(req.params.name)
    res.json(listing)
    });

  App.post("/name/search", (req, res) => {
  
    const listing = Database.readMany(req.params.beds, req.params.price)
    res.json(listing)
    });

  App.delete("/name/:name", (req, res) => {
  
    const listing = Database.deleteOne(req.params.name)
    res.json(listing)
    });
    
  App.listen(port, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      port,
      port
    );
  });