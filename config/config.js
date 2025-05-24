const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`conexión establecida con éxito`)
    }catch (err){
        console.log(err)
    }
}

module.exports = dbConnection