
export default class JobModel{
    constructor(id,jobCategory,jobDesignation,jobLocation,companyName,salary,applyBy,skillsRequired,numberOfOpenings,jobPosted,applicants){
        this.id = id;
        this.jobCategory = jobCategory;
        this.jobDesignation = jobDesignation;
        this.jobLocation = jobLocation;
        this.companyName = companyName;
        this.salary = salary;
        this.applyBy = applyBy;
        this.skillsRequired = skillsRequired;
        this.numberOfOpenings = numberOfOpenings;
        this.jobPosted = jobPosted;
        this.applicants = applicants;
    }
}