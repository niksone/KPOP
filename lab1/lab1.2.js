var Category;
(function (Category) {
    Category["businessAnalyst"] = "Business Analyst";
    Category["developer"] = "Developer";
    Category["designer"] = "Designer";
    Category["QA"] = "QA";
    Category["scrumMaster"] = "Scrum Master";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.businessAnalyst },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.scrumMaster },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.developer },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.scrumMaster }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    console.log("workers length " + workers.length);
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available === true) {
            console.log(worker.Name + " " + worker.surname);
            return worker;
        }
    }
}
function getWorkersNamesByCategory(category, workers) {
    var result = [];
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        if (worker.category === category)
            result.push(worker.surname);
    }
    return result;
}
function logWorkersNames(workers) {
    for (var _i = 0, workers_3 = workers; _i < workers_3.length; _i++) {
        var worker = workers_3[_i];
        console.log(worker);
    }
}
var names = getWorkersNamesByCategory(Category.scrumMaster, getAllworkers());
logWorkersNames(names);
// logFirstAvailable(getAllworkers())
