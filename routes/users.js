'use strict';
const express = require('express');
const router = express.Router();
const auth = require('../helpers/auth');
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
        try {
            // Check if the user exists
            const isUserExists = await User.findOne({email});
            if (isUserExists) return res.status(400).json({success: false, errors: [{msg: 'User already exists!'}]});
            let user = new User({
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
            });
            // Encrypt password
            const _salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, _salt);
            await user.save();
            return res.json({success: true, data: {message: 'User created successfully'}})
        } catch (e) {
            return res.status(500).json({success: false, errors: e});
        }

    });


/*
* @route - user/auth
* @desc - Authenticate user and get token
* @access - public
* */
router.post('/auth',
    check('email', 'Please provide a valid email!').isEmail(),
    check('password', 'Password is regarding!').exists(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({success: false, errors: errors.array()});

        const {email, password} = req.body;
        try {
            // Check if the user exists
            const user = await User.findOne({email});
            if (!user) return res.status(400).json({success: false, errors: [{msg: 'Invalid Credentials'}]});

            // Check the email and password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) return res.status(400).json({
                success: false,
                errors: [{msg: 'Invalid credentials!'}]
            });

            // Create a JSON payload
            const payload = {user: {id: user.id}};

            jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 3600000}, (err, token) => {
                if (err) throw err;
                else return res.json({token});
            });

        } catch (e) {
            console.trace(e);
            return res.status(500).json({success: false, errors: e});
        }
});

/*
* @route - api/auth
* @desc - GET USER Details
* @access = PROTECTED
* */
router.get('/auth', auth, async( req, res )=>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        return res.json(user);
    } catch (e) {
        console.trace(e);
        return res.status(500).json({success: false, errors: e});
    }
});

module.exports = router;
