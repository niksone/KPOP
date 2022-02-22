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

const favoriteAuthor: Author = {
    name: 'Author Name',
    email: 'author@com.com',
    numBooksPublished: 3
}

const favoriteLibrarian: Librarian = {
    name: 'Librarian Name',
    email: 'librarian@com.com',
    department: 'some department',
    assistCustomer(custName) {
        console.log(custName)
    }
}
