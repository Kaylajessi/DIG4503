import Database from "./Database.js";
import express from "express";
import cors from "cors"

const app = express();
const PORT = 45030;
const Database = new Database();

app.use(cors());
  
app.use(express.json());
    
app.post('/', function (req, res) {
    console.log(req.body.name)
    res.end();
})

Database.connect()

  App.put("/books/:ISBN", (req, res) => {

    const book = Database.createOne(req.params.ISBN, req.body.author, req.body.title, req.body.description)
    res.json(book)
    });

  App.get("/books/:ISBN", (req, res) => {
  
    const book = Database.readOne(req.params.ISBN)
    res.json(book)
    });

  App.post("/books/search", (req, res) => {
  
    const book = Database.readMany(req.params.author, req.params.title)
    res.json(book)
    });

  App.patch("/books/:ISBN", (req, res) => {
  
    const book = Database.updateOne(req.params.ISBN, data)
    res.json(book)
    });

  App.delete("/books/:ISBN", (req, res) => {
  
    const book = Database.deleteOne(req.params.ISBN)
    res.json(book)
    });
    
  App.listen(port, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      port,
      port
    );
  });