const fs = require("fs")

const db = "./db/user.json"

function readJSON(db){
    const miObjeto_json = fs.readFileSync(db, "utf-8")
    const miObjeto = JSON.parse(miObjeto_json)
    return miObjeto;
}

function resetUsers(){
    const user0 = {
        "username": "admin",
        "password": "123"
    }
    const user1 = {
        "username": "usuario0",
        "password": "usuario1234"
    }
    const miObjeto = {
        "users": [user0, user1]
    }
    fs.writeFile(db, JSON.stringify(miObjeto, null, 2), (error) => {
        if(error){
            console.log(error)
            return;
        }
        console.log("Archivo creado");
    });
    console.log(miObjeto.users[0].username)
}

function addUser(){
    const miObjeto = readJSON(db)
    const { users } = miObjeto

    console.log(users)
}

addUser()


module.exports = {
    readJSON,
}