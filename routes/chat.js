'use strict';
const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const Namespace = require('../models/NameSpace');
const Room = require('../models/Room');

/*
* @route - POST /namespace/create
* @desc = API To create new namespace
* @access = PROTECTED
* */
router.post('/namespace/create', 
    check('name','Namespace name is required!').not().isEmpty(),
    check('type','Type of namespace is required!').not().isEmpty(),
async(req, res, next)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({success: false, errors: errors.array()});

        const { name, type } = req.body;
        const _namespace = new Namespace({name, type});
        await _namespace.save();
        return res.json({ success: true, data:{ msg:' Namespace created successfully' }});
    } catch (e){
        return res.status(500).json({success: false, errors: e});
    }
});


/*
* @route - POST /namespace/get
* @desc = API To create new namespace
* @access = PROTECTED
* */
router.post('/namespace/get', 
async(req, res, next)=>{
    try{
        const namspaces = await Namespace.find();
        return res.json({ success : true, data: namspaces });
    } catch (e){
        return res.status(500).json({success: false, errors: e});
    }
});




/*
* @route - POST /rooms/create
* @desc = API To create new room
* @access = PROTECTED
* */
router.post('/namespace/create', 
    check('name','Namespace name is required!').not().isEmpty(),
    check('type','Type of namespace is required!').not().isEmpty(),
    check('namespaceID','Namespace id is required').not().isEmpty(),
async(req, res, next)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({success: false, errors: errors.array()});

        const { name, type, namespaceID } = req.body;
        const _rooms =  new Room({ name, type, namespaceID });
        await _rooms.save();
        return res.json({ success: true, data:{ msg:' Rooms created successfully' }});
    } catch (e){
        return res.status(500).json({success: false, errors: e});
    }
});


module.exports = router;