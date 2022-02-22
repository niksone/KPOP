function createCustomer(name, age, city) {
    console.log(name + " " + (age || '') + " " + (city || ''));
}
createCustomer('User1');
createCustomer('User2', 19);
createCustomer('User3', 21, 'Kyiv');
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
function getWorkersNamesByCategory(workers, category) {
    if (category === void 0) { category = Category.designer; }
    var result = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.category === category)
            result.push(worker.surname);
    }
    return result;
}
getWorkersNamesByCategory(getAllWorkers());
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllWorkers(); }
    console.log("workers length " + workers.length);
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        if (worker.available === true) {
            console.log(worker.Name + " " + worker.surname);
            return worker;
        }
    }
}
logFirstAvailable();
console.log('1.5.4');
function getWorkerByID(id, workers) {
    var worker = workers.find(function (worker) { return worker.id === id; });
    return worker ? worker.name + " " + worker.surname : null;
}
function сheckoutWorkers(customer, workerIDs, workers) {
    if (workers === void 0) { workers = getAllWorkers(); }
    var result = [];
    console.log("Customer: " + customer);
    workerIDs.forEach(function (id) {
        var worker = getWorkerByID(id, workers);
        worker ? console.log(worker) : console.log(" worker with id " + id + " not found");
    });
}
сheckoutWorkers('Ann', [1, 2, 4]);
