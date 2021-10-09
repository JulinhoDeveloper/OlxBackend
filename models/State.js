const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String
});

const modelName = 'State';

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[mongoose.modelName];
} else {
    module.exports  = mongoose.model(mongoose.modelName, modelSchema);
}