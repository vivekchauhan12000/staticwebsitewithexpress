const express = require('express');
const path=require('path');
//const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname,'public')));

/*app.get('/',(req, res)=> {
  res.send('<h1>fuck you</h1>');
});*/


const Port= process.env.Port || 5000;

app.listen(Port);