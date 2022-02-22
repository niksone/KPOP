
enum Category {
    businessAnalyst = 'Business Analyst',
    developer = 'Developer',
    designer = 'Designer',
    QA = 'QA',
    scrumMaster = 'Scrum Master'
}

function getAllWorkers() {
    let workers = [
        {id: 0, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.businessAnalyst},
        {id: 1, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.scrumMaster},
        {id: 2, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.developer},
        {id: 3, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.scrumMaster}
    ]
    return workers;
}


function getWorkerByID(id: number, workers){
    const worker = workers.find(worker => worker.id === id)
    console.log(`${worker.name} ${worker.surname} ${worker.salary}`)
}

getAllWorkers().forEach(
    (worker) => {
        if(worker.category === Category.developer){
            console.log(`${worker.name} ${worker.surname}`)
        }
    }
)


getWorkerByID(1, getAllWorkers())

