'use strict';
const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const Programmes = require('../models/Programmes');

/*
* @route - POST /create-programme
* @desc = API To create new Programme
* @access = PROTECTED
* */

router.post('/create-programme',
    check('programme_code', 'Programme code is required!').not().isEmpty(),
    check('programme_name', 'Please enter a valid Prgramme name').not().isEmpty(),
    check('total_semesters', 'Please enter total semester').not().isEmpty(),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({success: false, errors: errors.array()});

        const {programme_code, programme_name, total_semesters} = req.body;
        try {
            const isProgrammeExists = await Programmes.findOne({programme_code});
            if (isProgrammeExists) return res.status(400).json({success: false, errors: [{msg: "Programme already exists"}]})

            const programme = new Programmes({
                programme_code, programme_name, total_semesters
            });
            await programme.save();
            return res.json({success: true, data: {msg: 'Programme created successfully'}});

        } catch (e) {
            return res.status(500).json({success: false, errors: e});
        }

    });

module.exports = router;