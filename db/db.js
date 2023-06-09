const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
    try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    console.log("Base de datos conectada");
    } catch {
    console.log("Problema al conectar con la base de datos");
    }
};

module.exports = { connect };
