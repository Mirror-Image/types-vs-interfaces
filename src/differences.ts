import { IChicken, TOwl } from './common'

/* Error messages */
let owl: TOwl = { wings: 2, nocturnal: true }
let chicken: IChicken = { wings: 2, colorful: false, flies: false }

owl = chicken

// TypeScript documentation recommends us use interfaces over type aliases
chicken = owl


/* Declaration merging */
interface IKitten {
    purrs: boolean
}

interface IKitten {
    colour: string
}

const cuteKitten: IKitten = {
    purrs: true,
    colour: 'white',
}

type TPuppy = {
    color: string
}

type TPuppy = {
    toys: number
}


/* Primitives and Tuple types */
type TNullish = null | undefined
type TNum = number | bigint
type TSocialSecurityNumber = string

type TTableRow = [
  columnOne: number,
  columnTwo: string,
  columnThree: { property: string }
]


/* Workarounds tuple types with interface */
interface ITeamMember extends Array<string | number> {
    0: string
    1: string
    2: number
}

const Peter: ITeamMember = ['Harry', 'Dev', 24]
const Tom: ITeamMember = ['Harry', 30, 'Manager']


/* Union and Mapped types */
type TFruit = 'apple' | 'orange' | 'banana'
type TVegetable = 'broccoli' | 'carrot' | 'lettuce'

type THealthyFoods = TFruit | TVegetable

// Mapped types
type TFruitCount = {
    [key in TFruit]: number
}

const fruits: TFruitCount = {
    apple: 2,
    orange: 3,
    banana: 4,
}

interface IFruitCount {
    [key in TFruit]: number
}


/* Extending and implementing a union types */
type TJobs = 'salary worker' | 'retired'

interface IMoreJobs extends TJobs {
    description: string
}

type TPrimaryKey = { key: number, position: string } | { key: string }

class RealKey implements TPrimaryKey {
    key = 1
}


/* Utility, Conditional and Template Literal types */
type TNullable<T> = T | null | undefined
type TNonNull<T> = T extends (null | undefined) ? never : T

// Template Literal
type TEmailLocaleIDs = 'welcome_email' | 'email_heading'
type TFooterLocaleIDs = 'footer_title' | 'footer_sendoff'

type TAllLocaleIDs = `${TEmailLocaleIDs | TFooterLocaleIDs}_id`

type TLang = 'en' | 'de'

type TLocaleMessageIDs = `${TLang}_${TAllLocaleIDs}`


/* Difference in indexing */
interface IFoobar {
    foobar: string
}

type TFoobar = {
    foobar: string
}

const exampleInterface: IFoobar = { foobar: 'hello world' }
const exampleType: TFoobar = { foobar: 'hello world' }

let record: Record<string, string> = {}

record = exampleType // compiles
record = exampleInterface // Error: Index signature is missing


/* Advanced type feature */
type TClient = {
    name: string
    address: string
}

type TGetters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

type TClientGetters = TGetters<TClient>

const client: TClient & TClientGetters = {
    name: 'Nick',
    address: '1100001, Washington DC, Main street 1',
    getName: function (){
        return this.name
    },
    getAddress: function () {
        return this.address
    }
}
