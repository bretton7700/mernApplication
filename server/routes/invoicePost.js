const router = require("express").Router();
const Invoice = require('../models/invoice');
router.post('/' , async(req,res) => {
    const invoice = new Invoice(req.body)
    try {
        await invoice.save()
        res.status(201).json({
            status: "Invoice created Successfully",
            data : {
                invoice
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Invoice creation Failed",
            message : error
        })
        
    }
});

module.exports =router;