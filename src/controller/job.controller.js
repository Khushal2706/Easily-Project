
import JobModel from "../model/job.model.js";

export default class JobController{
    getJobs(req,res){

        const jobs = JobModel.getAll();

        res.render('jobs',{jobs:jobs});
    }
}