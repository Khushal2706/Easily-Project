import express from 'express';

const server = express();
server.get('/',(req,res)=>{
    res.send("Server Initialized");
})
server.listen(3100, ()=>{
    console.log('server is listening on port 3100');
})