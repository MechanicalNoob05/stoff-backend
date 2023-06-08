const express = require('express');
const Customermodel = require('../../models/user');
const route = express.Router();
route.delete('/', async (req, res) => {
  try {
    let customer=Customermodel.findById(req.body.id);
    if(!customer){
      return res.status(400).json({ errors: errors.array() });
    }
    customer= await customer.findByIdAndDelete(req.body.id)
    res.status(200).json({"success":"your account is deleted",customer:customer})
  } catch (err) {
    res.json({ errors: err, message: err.message })
  }
})
module.exports = route