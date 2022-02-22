class ReferenceItem {
    private _publisher: string = ''

    constructor(
        public title: string,
        private year: number
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

}

const ref = new ReferenceItem('Title', 2021)
ref.printItem()
ref.publisher = 'publisher'
console.log(ref.publisher)
