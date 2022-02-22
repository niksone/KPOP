interface Person {
    name: string
    email: string
}

interface Author extends Person {
    numBooksPublished: number
}

interface Librarian extends Person{
    department: string
    assistCustomer: (custName: string) => void
}


class UniversityLibrarian implements Librarian {
    constructor(
        public name: string,
        public email: string,
        public department: string,
    ){}

    assistCustomer(custName: string){
        return `${this.name} is assisting ${custName}`
    }
}

const favoriteLibrarian = new UniversityLibrarian('Librarian', 'librarian@com.com', 'some department')

console.log(favoriteLibrarian.assistCustomer('Nikita'))