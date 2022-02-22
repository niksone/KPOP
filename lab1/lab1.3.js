var Category;
(function (Category) {
    Category["businessAnalyst"] = "Business Analyst";
    Category["developer"] = "Developer";
    Category["designer"] = "Designer";
    Category["QA"] = "QA";
    Category["scrumMaster"] = "Scrum Master";
})(Category || (Category = {}));
function getAllWorkers() {
    var workers = [
        { id: 0, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.businessAnalyst },
        { id: 1, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.scrumMaster },
        { id: 2, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.developer },
        { id: 3, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.scrumMaster }
    ];
    return workers;
}
function getWorkerByID(id, workers) {
    var worker = workers.find(function (worker) { return worker.id === id; });
    console.log(worker.name + " " + worker.surname + " " + worker.salary);
}
getAllWorkers().forEach(function (worker) {
    if (worker.category === Category.developer) {
        console.log(worker.name + " " + worker.surname);
    }
});
getWorkerByID(1, getAllWorkers());
