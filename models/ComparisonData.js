const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComparisonDataSchema = new Schema({
  stocks: { type: Array },
  stockData: { type: Array }
}, { versionKey: false });

const ComparisonData = mongoose.model('ComparisonData', ComparisonDataSchema);

module.exports.ComparisonData = ComparisonData;