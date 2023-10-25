import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('t_candidate', {
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    full_name: DataTypes.STRING,
    dob: DataTypes.STRING,
    pob: DataTypes.STRING,
    gender: DataTypes.STRING,
    years_exp: DataTypes.STRING,
    last_salary: DataTypes.STRING
}, {
    freezeTableName: true
});

export default User;

(async()=>{
    await db.sync();
})();
