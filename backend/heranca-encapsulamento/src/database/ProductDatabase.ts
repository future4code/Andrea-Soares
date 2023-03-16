import { Product } from "../models/Product"
import { BaseDatabase } from "./connection"
import { TABLE_PRODUCTS } from "./tableNames"


export class ProductDatabase extends BaseDatabase{

    public async getAllProducts(){
        const result = await BaseDatabase
        .connection(TABLE_PRODUCTS)
        .select()

        return result
    }

    public async createProduct(product:Product) {
        await BaseDatabase
        .connection(TABLE_PRODUCTS)
        .insert(product)
    }

    public async findProductById (id:string) {
        const result = await BaseDatabase
        .connection(TABLE_PRODUCTS)
        .select()
        .where("id",id)
        return result
    }
}