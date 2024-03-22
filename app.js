import express from "express"
import { router } from './router/compras.js'

import sequelize from "./database.js"


const app = express()

try{
await sequelize.sync()

}catch(erro){
    console.log(erro)
}

app.use(express.json())
app.use(router)

app.listen(3000, () => console.log("Rodando"))