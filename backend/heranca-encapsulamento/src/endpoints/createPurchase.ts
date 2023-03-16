import { Request, Response } from "express"
import { BaseDatabase } from "../database/connection"
import { ProductDatabase } from "../database/ProductDatabase"
import { PurchaseDatabase } from "../database/PurchaseDatabase"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { UserDatabase } from "../database/UserDatabase"
import { Product } from "../models/Product"
import { Purchase } from "../models/Purchase"


export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        console.log(userId);
        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }
        const userDatabase = new UserDatabase
        const findUser = await userDatabase.finduserById(userId)
        console.log(findUser[0]);

        // const findUser = await connection(TABLE_USERS)
        // .select()
        // .where({ id: userId })

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        console.log(productId, "produto id");
        
        const productDatabase = new ProductDatabase
        const findProduct = await productDatabase.findProductById(productId)

        console.log(findProduct);
        
        // const findProduct = await connection(TABLE_PRODUCTS)
        // .select()
        // .where({ id: productId })

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        // const product: Product = {
        //     id: findProduct[0].id,
        //     name: findProduct[0].name,
        //     price: findProduct[0].price
        // }

        const product = new Product(
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )

        // const newPurchase: Purchase = {
        //     id: Date.now().toString(),
        //     userId,
        //     productId,
        //     quantity,
        //     totalPrice: product.getPrice() * quantity
        // }

        const purchase = new Purchase(
            Date.now().toString(),
            userId,
            productId,
            quantity,
            product.getPrice() * quantity
        )
        console.log(purchase);
        
        const purchaseDatabase = new PurchaseDatabase
        await purchaseDatabase.insertPurchase(purchase)

        res.status(201).send({ message: "Compra registrada", purchase: purchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}