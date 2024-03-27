const { Schema, model } = require("mongoose");

const FallenDefender = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  bio: { type: String, required: true },
  birthDate: { type: Number, required: true },
  deathDate: { type: Number, required: true },
  image: { type: Buffer, required: true },
});

module.exports = model("FallenDefender", FallenDefender);
