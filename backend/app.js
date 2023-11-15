
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const courseroute = require('./routes/course.route')
const authRoute = require("./routes/authroutes");
const cors = require('cors');
const App = express();
App.use(express.json());



App.use(cors());
App.use('/course', courseroute)
App.use("/auth", authRoute);


const port = process.env.PORT || 8000; // Use 8000 as the default port

mongoose.connect(process.env.MONGODBURL)
.then(()=>{
    App.listen(port, () => {
        console.log(`Database Connect Sucessfully, Server is running on port ${port}`);
    });
        
}).catch((err)=>{
    console.log('err', err)
})



