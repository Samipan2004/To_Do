const mongoose=require('mongoose');
const FormDataSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const FormDataModel = mongoose.model('User', FormDataSchema);

module.exports = FormDataModel;
