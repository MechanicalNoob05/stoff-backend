const express = require('express');
const router = express.Router();
const Product = require('../../models/product');

router.post('/', async (req, res) => {
    try {
        for (var i = 0; i < req.body.arrayindex.length; i++) {
            let filter = { _id: req.body.arrayindex[i] };
            let update = {
                Images:["https://img3.gadgetsnow.com/gd/images/products/additional/large/G10603_View_1/mobiles/feature-phones/nokia-105-dual-sim-black-4-mb-.jpg","https://img2.gadgetsnow.com/gd/images/products/additional/large/G10603_View_2/mobiles/feature-phones/nokia-105-dual-sim-black-4-mb-.jpg","https://img5.gadgetsnow.com/gd/images/products/additional/large/G10603_View_3/mobiles/feature-phones/nokia-105-dual-sim-black-4-mb-.jpg"]
            };
            let product = await Product.findOneAndUpdate(filter, update, { new: true });
        }
        return res.status(200).json("Done");
    }
    catch (error) {
        return res.status(500).json({ err: error.message });
    }

})

module.exports = router;