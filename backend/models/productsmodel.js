import Sequelize  from "sequelize";
import Db from "../config/database.js";

const  DataTypes  = Sequelize;

const product = Db.define('products',{
    title:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
},{
    freezeTableName: true
});

export default product