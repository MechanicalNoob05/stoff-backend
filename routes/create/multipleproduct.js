const express = require('express');
const Product = require('../../models/product');
const Storemodel = require('../../models/store');
const route = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../../middleware/fetchuser')

route.post('/',fetchuser, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    for (var i = 0; i < req.body.productarray.length; i++){
    const product = await Product.create({
        store: req.user.id,
        Quantity: req.body.productarray[i].Quantity,
        Price: req.body.productarray[i].Price,
        Name: req.body.productarray[i].Name,
        Brand: req.body.productarray[i].Brand,
        Category: req.body.productarray[i].Category,
        Gender: req.body.productarray[i].Gender,
        Description: req.body.productarray[i].Description,
        Highlight: req.body.productarray[i].Highlight,
        color: req.body.productarray[i].color,
        Price: req.body.productarray[i].Price
    })
    const userid = req.user.id
    let filter = { _id: userid };
    const store = await Storemodel.find({_id: userid})
    let Products = store[0].Productlist
    Products.push(product._id)
    let update = {Productlist: Products};
    let stores = await Storemodel.findOneAndUpdate(filter, update, { new: true });
    }
    res.status(200).json({ stores})
  } catch (err) {
    res.json({ errors: err, message: err.message })
  }
})
module.exports = route