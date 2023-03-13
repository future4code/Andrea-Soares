import { UserDatabase } from "../data/userDatabase"

export class UserBusiness {
    createUser = async(input:any): Promise<void> =>{
        try {
            
            const { name, nickname, email, password } = input
    
          if (
             !name ||
             !nickname ||
             !email ||
             !password
          ) {
             throw new Error('Preencha os campos "name","nickname", "email" e "password"')
          }
          
            if(password.length < 6 ){
                throw new Error('"password" precisa de 6 dígitos')
            }
          const id: string = Date.now().toString()
    
          const userDatabase = new UserDatabase()
          await userDatabase.insertUser({
             id,
             name,
             nickname,
             email,
             password
          })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    findUser = () =>{}
    deleteUser = () =>{}
}