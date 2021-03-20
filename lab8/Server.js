var Express = require('express');
var CORS = require('cors');

const App = Express();
const port = 45030;
App.use(CORS());

let names = [
  'Cortney','Dewayne','Trenton','Pamala','Ettie',
  'Errol','Lorrie','Hang','Lauryn','Caterina',
  'Isa','Marcela'];
App.use(Express.json())
App.use(Express.urlencoded({extended:true}))
 
App.get("/people/:person", (req, res) => {

  let result = "Not found!";
  var response;
  names.forEach((value) => {
      if(req.params.person == value) {
          result = value;
      }
  });
  response = {name: result}
  res.json(response);
});

App.get("/search/:name", (req, res) => {

    let result = "Not found!";
    var response = []
    names.forEach((value) => {
        if(value.includes(req.params.name)) {
            response.push(value);
        }
    });
    if(response.length == 0){
        response = {search: [result]}
    }else {
        response = {search: response}
    }
    
    res.json(response);
  });

App.put("/people/:person", (req, res) => {
var personname = req.params.person
  var response;
  names.push(personname)
  response = {name: personname}
  console.log(response)
  res.json(response);
});

App.listen(port, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    port,
    port
  );
});
