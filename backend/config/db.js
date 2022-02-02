import { Sequelize } from 'sequelize'

const db = new Sequelize('contact_list', 'root', 'darko', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;