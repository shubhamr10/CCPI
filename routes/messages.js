'use strict';
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Messages = require('../models/Messages');

/*
* @route - POST /create-message
* @desc = API To create new message
* @access = PROTECTED
* */
router.post('/create-message',
    check('text', 'Message is required!').not().isEmpty(),
    check('namespaceID','Namespace ID is required').not().isEmpty(),
    check('roomID','Room id is required').not().isEmpty(),
    check('user', 'User Id is required').not().isEmpty(),
async (req, res, next) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({success: false, errors: errors.array()});

        const { text, link, namespaceID, roomID, user } = req.body;

        const _message = new Messages({ text, link, namespaceID, roomID, user });
        await _message.save();
        return res.json({ success: true, data:{ msg:' Message created successfully' }});
    } catch (e) {
        return res.status(500).json({success: false, errors: e})
    }
});


/*
* @route - POST /get-messages
* @desc = API To GET messages
* @access = PROTECTED
* */
router.post('/get-messages',
    check('namespaceID','Namespace ID is required').not().isEmpty(),
    check('roomID','Room id is required').not().isEmpty(),
async (req, res, next) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({success: false, errors: errors.array()});

        const { namespaceID, roomID } = req.body;
        const _messages = await Messages.find({ namespaceID:namespaceID, roomID:roomID  });
        return res.json({ success : true, data: _messages });
    } catch (e) {
        return res.status(500).json({success: false, errors: e})
    }
});

module.exports = router;