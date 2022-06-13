
const router = require("express").Router();
const Invoice = require("../models/invoice");


router.delete('/', async(req,res) => {
    
    await Invoice.findOneAndDelete({id: req.params.id});

    try{
      res.status(204).json({
          status : 'Success',
          data : {}
      })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
});

module.exports = router;

