import  sequelize  from "sequelize";


const Db = new sequelize('mern_db', 'root','',{
    host: "localhost",
    dialect: "mysql"
});

export default Db;