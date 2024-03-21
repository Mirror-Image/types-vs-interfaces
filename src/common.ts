/* Objects */
type TBird = {
    wings: 2
}

interface IBird {
    wings: 2
}

const bird1: TBird = { wings: 2 }
const bird2: IBird = { wings: 2 }


/* Functions */
type TBirdFly = (distance: number) => void

interface IBirdFly {
    (distance: number): void
}

const flyType: TBirdFly = (distance) => {}
const flyInterface: IBirdFly = (distance) => {}


/* Classes */
type TAnimal = {
    name: string
    run(): void
}

class Cat implements TAnimal {
    name = 'Thomas'
    run() {
        console.log('I am running')
    }
}

interface IAnimal {
    name: string
    fly(): void
}

class Hawk implements IAnimal {
    name = 'Nick'
    fly() {
        console.log('I am flying')
    }
}


/* Extending */
export type TOwl = { nocturnal: true } & TBird
type TRobin = { nocturnal: false } & IBirdFly

interface IPeacock extends TBird {
    colorful: true
    flies: false
}

export interface IChicken extends IBird {
    colorful: false
    flies: false
}

type TOther = {}
interface IOther {}

type TOwlMultipleExtensions = { nocturnal: true } & TBird & TOther & IOther

interface ChickenMultipleExtensionsInterface extends IBird, TOther, IOther {
    colorful: false
    flies: false
}
