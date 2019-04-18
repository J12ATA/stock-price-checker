const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockDataSchema = new Schema({
  stock: { type: String },
  price: { type: String },
  likes: { type: Number, default: 0 },
  ips: { type: Array }
}, { versionKey: false });

const StockData = mongoose.model('StockData', StockDataSchema);

module.exports.StockData = StockData;