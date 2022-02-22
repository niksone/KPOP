const createCustomerID = (name:string, id:number):string => {
    return `${name} ${id}`
}

const myID:string = createCustomerID("Ann", 10)
console.log(myID)

let idGenerator: (name:string, id:number) => string
idGenerator = createCustomerID

console.log(idGenerator("Nikita", 19))