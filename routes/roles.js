'use strict';
const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const Roles = require('../models/Roles');

/*
* @route - POST /create-role
* @desc = API To create new role
* @access = PROTECTED
* */

router.post('/create-role',
    check('role_name', 'Role is required!').not().isEmpty(),
    check('role_permissions', 'Add permissions').not().isEmpty(),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({success: false, errors: errors.array()});

        const {role_name, role_permissions} = req.body;
        try {
            const isRoleExists = await Roles.findOne({role_name});
            if (isRoleExists) return res.status(400).json({success: false, errors: [{msg: "Role already exists"}]})

            const _role = new Roles({
                role_name, role_permissions
            });
            await _role.save();
            return res.json({success: true, data: {msg: 'Role created successfully'}});

        } catch (e) {
            return res.status(500).json({success: false, errors: e});
        }

    });

module.exports = router;