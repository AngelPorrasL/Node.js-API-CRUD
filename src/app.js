const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const indexRoutes = require('./routes/index');

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb+srv://AngelPorras:AngelPorras0022@cluster0.u4hw3gz.mongodb.net/PeliculasSeries?retryWrites=true&w=majority&appName=Cluster0')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));

app.use('/', indexRoutes);

app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log(`server on port 3000`);
});

//mongodb://127.0.0.1:27017/NodejsBackend

//mongodb+srv://AngelPorras:AngelPorras0022@cluster0.u4hw3gz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0