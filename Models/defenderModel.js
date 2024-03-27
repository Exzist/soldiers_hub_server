const { Schema, model } = require("mongoose");

const Defender = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  bio: { type: String, required: true },
  image: { type: Buffer, required: true },
});

module.exports = model("Defender", Defender);
