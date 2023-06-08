const express = require('express');
const router = express.Router();
const Customermodel = require('../../models/user');

router.post('/', async (req, res) => {
    try {
        const { id } = req.body;
        let filter = { _id: id };
        let update = {
            Firstname: Firstname,
            Lastname: Lastname,
            Phonenumber: Phonenumber,
            Password: password,
        };
        let customer = await Customermodel.findOneAndUpdate(filter, update, { new: true });
        return res.status(200).json({ customer });
    }
    catch (error) {
        return res.status(500).json({ err: error.message });
    }

})

module.exports = router;