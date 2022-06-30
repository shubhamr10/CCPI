'use strict';
const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const Centers = require('../models/Centers');

/*
* @route - POST /create-center
* @desc = API To create new study centers
* @access = PROTECTED
* */

router.post('/create-center',
    check('center_code', 'Center code is required!').not().isEmpty(),
    check('center_email', 'Please enter a valid email').isEmail(),
    check('center_name', 'Please add a center name').not().isEmpty(),
    check('center_type', 'Center type is required!').not().isEmpty(),
    check('address', 'A center needs to have an address').not().isEmpty(),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({success: false, errors: errors.array()});

        const {center_code, center_email, center_name, center_type, address} = req.body;
        try {
            const isCenterExists = await Centers.findOne({"$or": [{center_code}, {center_email}]});
            if (isCenterExists) return res.status(400).json({success: false, errors: [{msg: "Center already exists"}]})

            const _center = new Centers({
                center_code, center_email, center_name, center_type, address
            });
            await _center.save();
            return res.json({ success: true, data:{ msg:' Center created successfully' }});

        } catch (e) {
            return res.status(500).json({success: false, errors: e});
        }

    });


/*
* @route - GET /regional-centers
* @desc = API TO FETCH ALL THE REGIONAL CENTERS
* @access = protected
* */

router.get('/regional-centers', async( req, res, next) => {
    try{
        const regional_centers = await Centers.find({center_type:'RC'});
        return res.json({ success : true, data: regional_centers });
    } catch (e) {
        return res.status(500).json({success: false, errors: e})
    }
})

module.exports = router;