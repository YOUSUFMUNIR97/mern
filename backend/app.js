// post man software

// const express = require("express");

// const fs = require('fs');
// const path = require('path');
// const http = require('http')

// // const arr = ['yousuf','munir']
// const course = [
//     {
//         id:'1',
//         name:'yousuf'
//     }
// ]

// const server = http.createServer((req, res)=>{
//     if (req.url == '/course'){
//     console.log("/Request");
//     res.write(JSON.stringify(course))
// }
// res.end();
// })
// server.listen(3000)

// const express = require('express');

// const App = express()
// App.get('/course', (req, res)=>{
//     res.send(course);
// });

// App.listen(5000)


const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const App = express();
const courseroute = require('./routes/course.route')
App.use(express.json());



App.use('/course', courseroute)



const port = process.env.PORT || 8000; // Use 8000 as the default port

mongoose.connect(process.env.MONGODBURL)
.then(()=>{
    App.listen(port, () => {
        console.log(`Database Connect Sucessfully, Server is running on port ${port}`);
    });
        
}).catch((err)=>{
    console.log('err', err)
})



