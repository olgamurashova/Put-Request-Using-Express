const express = require('express');
const app = express();
const port = process.env.port || 8000;

const destinations = [{
    Greece:{days:8, cost:1000},
    Uzbekistan:{days:14, cost:1400},
    Russian:{days: 10, cost:1400},
    Turkey:{days:8, cost:800}
}];

//adding new destination object
const updatedDestinations = {Italy:{days:7, cost:1400}};
destinations.push(updatedDestinations);
//console.log(destinations);


app.get('/destinations/:name',(req,res,next)=>{
const destination = destinations[req.params.name];
if(destination){
    res.send(destination);
} else {
    res.status(400).send('Not found')
}
});

//adding new destination query /destinations/Italy?days=7&cost=1400
app.put('destinations/:name',(req,res,next) => {
    const newDestination = req.query;
    destinations[req.params.name] = newDestination;
    if(newDestination){
        res.send(newDestination);
    } else{
        res.status(400).send('Not found.');
    }
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}.`)
});
