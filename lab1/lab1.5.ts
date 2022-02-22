function createCustomer(name: string, age?: number, city?: string){
    console.log(`${name} ${age || ''} ${city || ''}`)
}

createCustomer('User1')
createCustomer('User2', 19)
createCustomer('User3', 21, 'Kyiv')

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


function getWorkersNamesByCategory(workers, category: Category = Category.designer): string[]{
    const result: string[] = []
    for(const worker of workers){
        if(worker.category === category) result.push(worker.surname)
    }
    return result
}

getWorkersNamesByCategory(getAllWorkers())

function logFirstAvailable(workers: any[] = getAllWorkers()) {
    console.log(`workers length ${workers.length}`);
    for(let worker of workers){
        if(worker.available === true){
            console.log(`${worker.Name} ${worker.surname}`)
            return worker
        }
    }
}

logFirstAvailable()

console.log('1.5.4')


function getWorkerByID(id: number, workers){
    const worker = workers.find(worker => worker.id === id)
    return worker ? `${worker.name} ${worker.surname}` : null
}

function сheckoutWorkers(customer: string, workerIDs: number[], workers = getAllWorkers()){
    const result: string[] = []
    console.log(`Customer: ${customer}`)
    workerIDs.forEach((id) => {
        const worker = getWorkerByID(id, workers)
        worker ? console.log(worker) : console.log(` worker with id ${id} not found`)
    })
}

сheckoutWorkers( 'Ann', [1, 2, 4])