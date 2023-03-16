import { BaseDatabase } from "./connection";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "./tableNames";
import { User } from "../models/User";


export class UserDatabase extends BaseDatabase {
    
    public async getAllUsers(){
        const result = await BaseDatabase
        .connection(TABLE_USERS)
        .select()

        return result
    }

    public async insertUser(user:User){
        await BaseDatabase
        .connection(TABLE_USERS)
        .insert(user)
    }

    public async getUserPurchases (id:string) {
        const result = await BaseDatabase
        .connection.raw(`
        SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS product_name,
            ${TABLE_PRODUCTS}.price AS product_price,
            ${TABLE_PURCHASES}.quantity AS product_quantity,
            ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `)
        return result
    }

    public async finduserById (id:string) {
        const result = await BaseDatabase
        .connection(TABLE_USERS)
        .select()
        .where("id",id)
        
        return result
    }
}