const path = require('path');
const express = require ('express');
const morgan = require ('morgan');
const cors  = require('cors');
const app = express();

//conecting to db
//mongoose.connect('mongodb://localhost/crud-mongo')
//    .then(db => console.log('DB connected'))
//    .catch(err => console.log(err));

//importing route
const indexRoutes = require('./routes/index');

//setting
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
const corsOptions= {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

//routes
app.use('/',indexRoutes);

//starting the server
app.listen(app.get('port'), ()=>{
    console.log (`server on port ${app.get('port')}`); 
});