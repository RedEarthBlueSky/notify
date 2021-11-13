interface Game {
    title: string
    images: string[]
    developer: string
}

export type PersonProps = {
    title: string,
    first: string, 
    last: string,
}

//  Collection is an array of Game objects
export type Collection = Game[]