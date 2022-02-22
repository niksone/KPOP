enum Category {
    businessAnalyst = 'Business Analyst',
    developer = 'Developer',
    designer = 'Designer',
    QA = 'QA',
    scrumMaster = 'Scrum Master'
}


function getAllworkers() {
    let workers = [
        {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.businessAnalyst},
        {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.scrumMaster},
        {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.developer},
        {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.scrumMaster}
    ]
    return workers;
}

function logFirstAvailable(workers: any[]) {
    console.log(`workers length ${workers.length}`);
    for(let worker of workers){
        if(worker.available === true){
            console.log(`${worker.Name} ${worker.surname}`)
            return worker
        }
    }
}

function getWorkersNamesByCategory(category: Category, workers): string[]{
    const result: string[] = []
    for(const worker of workers){
        if(worker.category === category) result.push(worker.surname)
    }
    return result
}


function logWorkersNames(workers: string[]): void{
    for(const worker of workers){
        console.log(worker)
    }
}

const names = getWorkersNamesByCategory(Category.scrumMaster, getAllworkers())
logWorkersNames(names)
// logFirstAvailable(getAllworkers())