import { Entity, PrimaryKey } from "@mikro-orm/core"

@Entity()
export class Dog {
    @PrimaryKey()
    id?: number
    
    name: string
    age: number
}

function Column() {
    throw new Error("Function not implemented.")
}
