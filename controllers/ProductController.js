const Product = require("../models/Product");
module.exports = {

   async store(req, res) {
      const product = await Product.create(req.body);
      return res.json(product);
   },

   async list(req, res) {
      const product = await Product.find({});
      return res.json(product);
   },

   async index(req, res) {
      const product = await Product.findOne({ _id: req.params.id });
      return res.json(product);
   },

   async update(req, res) {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json(product);
   },

   async destroy(req, res) {
      await Product.deleteOne({ _id: req.params.id });
      return res.json({ message: "Produto excluído" });
   }
};