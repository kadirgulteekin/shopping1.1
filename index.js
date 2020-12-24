
const Database = require('./database')
const loaadedfile = Database.load('meetup.json')
console.log(loaadedfile.name)
