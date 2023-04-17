const { Pkm } = require("../models/pokemon");
const { validationResult } = require("express-validator");

module.exports = {
  usuario(req, res) {
    res.status(201).send("ruta del usuario");
  },

  async lista(req, res) {
    const items = await Pkm.find();
    res.json({ items });
  },

  async listById(req, res) {
    const itemById = await Pkm.findById(req.params.id);
    res.json({ itemById });
  },

  async crear(req, res) {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        const item = new Pkm(req.body);
        await item.save();
        res.status(201).json(item);
      } else {
        res.status(501), json(err);
      }
    } catch (error) {
      res.status(401).json(error);
    }
  },

  async editar(req, res) {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        await Pkm.findByIdAndUpdate(req.params.id, req.body);
        res
          .status(201)
          .json({ msg: "Se modifico la informacion del pokemon: " + req.params.id });
      } else {
        res.json(err);
      }
    } catch (error) {
      res.status(401).json(error);
    }
  },

  async eliminar(req, res) {
    await Pkm.findByIdAndDelete(req.params.id);
    res.json({ msg: "El pokemon fue liberado" });
  },
};