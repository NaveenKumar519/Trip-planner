var mongoose = require("mongoose");
var touristPlaceSchema = new mongoose.Schema({
	title: String,
	image: String,
	description: String
});
module.exports = mongoose.model("TouristPlace",touristPlaceSchema);