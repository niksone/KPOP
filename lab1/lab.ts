// 1
function getAllworkers() {
    let workers = [
        {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ]
    return workers;
}

function logFirstAvailable(workers): void {
    console.log(`workers length ${workers.length}`);
    for(let worker of workers){
        if(worker.available === true){
            console.log(`${worker.Name} ${worker.surname}`)
        }
    }
}

logFirstAvailable(getAllworkers())

