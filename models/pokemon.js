const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pokemon = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
  },
  vivo: {
    type: Boolean,
    required: true,
  },
  nivel: {
    type: Number,
    required: true,
  },
});

const Pkm = mongoose.model("Pokemon", pokemon);
module.exports = { Pkm };
