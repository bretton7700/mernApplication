const mongoose = require('mongoose');
const InvoiceSchema = new mongoose.Schema({
    userEmail : {
        type: String,
        required: true
    },
    userAmount : {
        type: Number,
        required: true
    },
    userLocation :{
        type: String,
        required: true
    }
})

const Invoice = mongoose.model('Invoice',InvoiceSchema)

module.exports = Invoice