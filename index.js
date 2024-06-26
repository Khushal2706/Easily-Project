import express from 'express';
import path from 'path';
import ejsLayouts from "express-ejs-layouts"
import userController from './src/controller/user.controller.js';
import JobController from './src/controller/job.controller.js';


const server = express();
server.set("view engine","ejs");
server.use(express.static('public'));
// server.use(ejsLayouts);
const UserController = new userController();
const jobController = new JobController();

server.set("views",path.join(path.resolve(),'src','views'));
server.get('/', UserController.getView);
server.get('/jobs',jobController.getJobs);
server.listen(3100, ()=>{
    console.log('server is listening on port 3100');
});