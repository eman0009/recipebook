"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bearerToken = require('express-bearer-token');
const recipe_1 = require("./recipe");
// import {oktaAuth} from './auth'
const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(bearerToken())
    //   .use(oktaAuth)
    .use(recipe_1.router);
app.listen(4201, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log('My Node App listening on port 4201');
});
