enum Category {
    businessAnalyst = 'Business Analyst',
    developer = 'Developer',
    designer = 'Designer',
    QA = 'QA',
    scrumMaster = 'Scrum Master'
}


type PrizeLogger = (param: string) => void

interface WorkerI {
    id: number
    name: string
    surname: string
    available: boolean
    salary: Category
    markPrize: PrizeLogger
}

const logPrize: PrizeLogger = (prize: string) => {
    console.log(prize)
}

logPrize('Book')