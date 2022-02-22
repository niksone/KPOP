enum Category {
    businessAnalyst = 10000,
    developer = 12012,
    designer = 12321,
    QA = 11900,
    scrumMaster = 12300
}


interface WorkerI {
    id: number
    name: string
    surname: string
    available: boolean
    salary: Category
}


function getAllworkers(): WorkerI[] {
    let workers = [
        {id: 0, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.businessAnalyst},
        {id: 1, name: 'Petro', surname: 'Petrov', available: true, salary: Category.designer},
        {id: 2, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.developer},
        {id: 3, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.scrumMaster}
    ]
    return workers;
}


function getWorkerByID(id: number, workers: WorkerI[]): WorkerI | undefined{
    return workers.find(worker => worker.id === id)
}

function printWorker(worker: WorkerI | undefined){
    if(!worker) return
    return `${worker.name} ${worker.surname} got salary ${worker.salary}`
}

const worker = getWorkerByID(1, getAllworkers())
console.log(printWorker(worker))