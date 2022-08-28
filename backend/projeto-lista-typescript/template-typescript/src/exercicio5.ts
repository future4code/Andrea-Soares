type Usuario = {
    name: string,
    email: string,
    role: string
}
enum ROLE{
    USER="user",
    ADMIN="admin"
}

function retornaListaEmailsAdmin(array: Usuario[]): string[]{
    const usuariosFiltrados: string[] = array.filter((usuario)=>{
        return usuario.role === ROLE.ADMIN
    }).map((email)=>{
        return email.email
    })
    
    return usuariosFiltrados
}

const usuarios = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]
console.log(retornaListaEmailsAdmin(usuarios));
 