import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://jnrodupu:cShaPnZp1n0kJdL8YttjInQh0rRnirWF@kesavan.db.elephantsql.com/jnrodupu')

try{
    await sequelize.authenticate()
    console.log("Sucesso")
}catch(erro){
    console.log(erro)
}

export default sequelize