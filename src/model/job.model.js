
export default class JobModel{
    constructor(id,jobCategory,jobDesignation,jobLocation,companyName,salary,skillsRequired,applyBy,numberOfOpenings,jobPosted,applicants){
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

    static getAll(){
        return jobs;
    }
}

var jobs = [
    new JobModel(
        1,
        "TECH",
        "SDE",
        "Gurgaon HR IND Remote",
        "Coding Ninjas",
        "14-20lpa",
        ["React","nodejs","JS","SQL","AWS","Epxress","MomgoDB"],
        "30 Aug 2023",
        5,
        "6/26/2024, 10:03:12 AM",
        1
    ),

    new JobModel(
        2,
        "TECH",
        "Angular Developer",
        "Pune IND On-Site",
        "Go Digit",
        "6-10lpa",
        ["Angular","JS,Exress","AWS","MongoDB"],
        " 6/26/2024",
        7,
        " 6/26/2024, 10:03:12 AM",
        0
    ),

    new JobModel(
        3,
        "TECH",
        "SDE",
        "Bangalore IND",
        "Juspay",
        "20-26lpa",
        ["React","nodejs","JS","SQL","AWS","Epxress","MongoDB"],
        " 6/26/2024",
        4,
        " 6/26/2024, 10:03:12 AM",
        3
    )
]