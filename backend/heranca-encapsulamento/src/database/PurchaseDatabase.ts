import { Purchase } from "../models/Purchase";
import { BaseDatabase } from "./connection";
import { TABLE_PURCHASES } from "./tableNames";


export class PurchaseDatabase extends BaseDatabase {
    
    public async insertPurchase(purchase:Purchase) {
        await BaseDatabase
        .connection(TABLE_PURCHASES)
        .insert(purchase)
    }
}