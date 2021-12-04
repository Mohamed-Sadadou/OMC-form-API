// les declarations 
const express = require('express');
const bodyparser = require('body-parser');
const cookieparser =  require('cookie-parser');
const cors = require('cors');
const FormRoute = require("./Routes/FormRoute");
const PORT = 4500;
const app = express();
require('./Models/BD');
const corsOptions={
    origin: 'http://localhost:3005',
    credentials:true,
    'allowedHeaders':['sessionId','Content-Type'],
    'exposedHeaders':['sessionId'],
    'methods':'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue':false
}
app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(cookieparser()); 
app.use(bodyparser.urlencoded({extended: true}));

app.use('/Form', FormRoute)
app.listen(PORT,()=>{
    console.log('on ecoute le port :', PORT);
});