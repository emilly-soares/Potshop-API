const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {

   async store(req, res) {
      if (await User.findOne({ email: req.body.email })) {
         return res.status(400).json({ error: "Usuário já existe" });
      }
      const user = await User.create(req.body);
      return res.json(user);
   },

   async list(req, res) {
      const user = await User.find({});
      return res.json(user);
   },

   async index(req, res) {
      const user = await User.findOne({ _id: req.params.id });
      if (!user) {
         return res.status(400).json({ error: "Usuario não encontrado" });
      }
      return res.json(user);
   },

   async update(req, res) {
      const user = await User.findOne({_id: req.params.id});
      const hash = await bcrypt.hash(req.body.password,10);
      req.body.password = hash;
      const userUpdate = await User.findByIdAndUpdate(user._id, req.body, { new: true });
      return res.json({userUpdate});
   },

   async destroy(req, res) {
      await User.deleteOne({ _id: req.params.id });
      return res.json({ message: "Usuário excluído" });
   }

};