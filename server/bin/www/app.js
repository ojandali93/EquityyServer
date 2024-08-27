const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();

app.use(cors());      
app.use(helmet());      
app.use(morgan('common')); 
app.use(express.json()); 

module.exports = app;