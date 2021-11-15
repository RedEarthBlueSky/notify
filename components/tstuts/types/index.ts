interface Game {
    id: string,
    title: string
    images: string[]
    developer: string
} //  can specify the array here or in the export statement

export type PersonProps = {
    title: string,
    first: string, 
    last: string,
}

//  Collection is an array of Game objects
export type Collection = Game[] //  specify array here