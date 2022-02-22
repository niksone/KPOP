abstract class ReferenceItem {
    private _publisher: string = ''

    constructor(
        public title: string,
        protected year: number
    ){
        console.log('Creating a new ReferenceItem ...' )
    }

    printItem(){
        console.log(`${this.title} was published in ${this.year}`)
    }

    get publisher(){
        return this._publisher.toUpperCase()
    }

    set publisher(newPublisher: string){
        this._publisher = newPublisher
    }

    abstract printCitation(): void

}


class Encyclopedia extends ReferenceItem {
    constructor(
        title: string,
        year: number,
        public edition: string
    ){
        super(title, year)
    }

    printItem(){
        console.log(`Edition: ${this.edition} (${this.year})`)
    }

    printCitation() {
        console.log(`${this.title} - ${this.year}`)
    }
}


const refBook = new Encyclopedia('encyclopedia', 2000, 'Deluxe')
refBook.printCitation()