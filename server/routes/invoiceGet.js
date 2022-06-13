const router = require("express").Router();
const Invoice =require('../models/invoice');

router.get('/', async(req,res) =>{
    const invoice = await Invoice.find({})
    try {
        res.status(200).json({
            status: 'Success',
            data :{
                invoice
            }
            
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failed to get invoice',
            message : error
        })
    }
})

module.exports =router;