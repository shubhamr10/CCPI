'use strict';
const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

/*
* @route - GET /users
* @desc - test api
* @access = public
* */
router.get('/', (req, res) => {
    res.json({
        "success": true,
        "data": "API User works"
    });
    res.end();
});

/*
* @route - POST /users/create-users
* @desc - CREATE USERS ON CCPI
* @access = semi  restricted : by super admin only
* */
router.post('/create-users',
    check('full_name', 'Name is required!').not().isEmpty(),
    check('address', 'Address is required!').not().isEmpty(),
    check('email', 'Please add a valid email').isEmail(),
    check('role_id', 'Role id needs to be valid').not().isEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6}),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({success: false, errors: errors.array()});

        const {
            full_name,
            address,
            role_id,
            email,
            password,
            study_center_id,
            programme_id,
            regional_center_id,
            semester,
            subjects
        } = req.body;
        try{
            // Check if the user exists
            const isUserExists = await User.findOne({email});
            if(isUserExists) return res.status(400).json({success:false, errors:[{msg:'User already exists!'}]});
            return res.send('OK');
            let user = new User({
                full_name, address,role_id,password,study_center_id,programme_id,regional_center_id, semester, subjects
            });
            // Encrypt password
            const _salt = await bcrypt.getSalt('10');
            user.password = await bcrypt.hash(password, _salt);
            await user.save();
        } catch (e) {
            return res.status(500).json({success: false, errors: errors});
        }

    });

module.exports = router;
