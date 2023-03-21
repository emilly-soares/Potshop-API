const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(

   {
      description: {
         type: String,
         required: true
      },
      price: {
         type: Number,
         required: true
      },
      dimension: {
         type: String,
         required: true
      },
      image: {
         type: String
      },

   },
   {
      timestamps: true
   }


);

module.exports = model("Product", ProductSchema);