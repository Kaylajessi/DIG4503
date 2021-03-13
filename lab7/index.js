import Express from 'express';

const App = Express();
const port = 45030;

const names = [
  'Cortney','Dewayne','Trenton','Pamala','Ettie',
  'Errol','Lorrie','Hang','Lauryn','Caterina',
  'Isa','Marcela'];
App.use(Express.json())
App.use(Express.urlencoded({extended:true}))
  // A GET route.
//
// Request parameter of "id"
App.get("/people/:person", (req, res) => {

  // Set a default (search failed) result
  let result = "Not found!";
  var response;
  // Use the forEach() method of array.
  names.forEach((value) => {
      // Test if the request parameter "id" matches the entry of the array.
      // (Remember, all request parameters are String values!)
      if(req.params.person == value) {
          // If the search worked, save the result.
          result = value;
      }
  });
  response = {name: result}
  // There must always be a response!
  //
  // Because there is a default response, either
  //  the search will work or it will not.
  // Regardless, there will be a response!
  res.json(response);
});

App.get("/search/:name", (req, res) => {

    // Set a default (search failed) result
    let result = "Not found!";
    var response = []
    // Use the forEach() method of array.
    names.forEach((value) => {
        // Test if the request parameter "id" matches the entry of the array.
        // (Remember, all request parameters are String values!)
        if(value.includes(req.params.name)) {
            // If the search worked, save the result.
            response.push(value);
        }
    });
    if(response.length == 0){
        response = {search: [result]}
    }else {
        response = {search: response}
    }
    
    // There must always be a response!
    //
    // Because there is a default response, either
    //  the search will work or it will not.
    // Regardless, there will be a response!
    res.json(response);
  });
  
App.listen(port, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    port,
    port
  );
});