const router = require("express").Router();
const invoice = require("../models/invoice");



router.put('/', async (req,res) =>{
    
    const updatedInvoice = await invoice.findOneAndUpdate({id: req.params.id},req.body,{
        new : true,
        runValidators : true
    })
    try {
        res.status(200).json({
            status : 'Successfully updated Invoice',
            data : {
                updatedInvoice
            }
        })
    } catch (error) {
        console.log(error)
    }
})





module.exports = router;

