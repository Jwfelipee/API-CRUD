const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb+srv://Jwfelipe:Wictor91@cluster0.uqtla.mongodb.net/cursos?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models')


app.use('/sistema', require('./src/routes/routes'));
app.listen(process.env.PORT || 3001);
