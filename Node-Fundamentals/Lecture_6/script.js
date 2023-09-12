import express, { application } from 'express'

const portRoute = 3000;

/*
    Express has 3 Parts:
    1. Routing
    2. Middleware - functions that run between the request and response
    3. Templating/Viewing Engine
*/

// create express application (object)
const app = express();

app.use(express.static('public'));

// ORDER of routes MATTER
// must place routes without params first


// create a home route
app.get('/', (req, res) => {  // 2 Parameters: (request, response)
    // data we get from client is request (object)
    // data we send back from client is response (object)
    res.status(200).json({user:'Butter46',age:19});
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/:id', (req, res) => {
    res.status(200).send(`ID specified is ${req.params.id}`);
});
app.get('/:id/:name', (req, res) => {
    res.status(200).send(`Name specified is ${req.params.name}`);
});
// listen on portRoute
app.listen(portRoute, () => {
    console.log(`Server started on port http://localhost:${portRoute}/`);
});