const { Schema, model } = require("mongoose");

const Fee = new Schema({
	email: { type: String, required: true },
	type: { type: String, required: true },
	name: { type: String, required: true },
	description: { type: String, required: true },
	sum: { type: Number, required: true },
	requisite: { type: String, required: true },
	finish: { type: String, required: true },
	isAccepted: { type: Boolean, required: true },
	image: { type: String },
});

module.exports = model("Fee", Fee);
