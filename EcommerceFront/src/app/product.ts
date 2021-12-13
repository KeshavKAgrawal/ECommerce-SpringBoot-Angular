import { Byte } from "@angular/compiler/src/util"

export class Product {
    id!: number
    name!: string
    description!: string
    price!: number
    addedOn!: Date
    image!: [Byte]
    imageUrl!: string
}
