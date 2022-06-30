'use strict';
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const AnnoucementNews = require('../models/Announcement_News');

/*
* @route - POST /create-information
* @desc = API To create new Annoucement or news
* @access = PROTECTED
* */
router.post('/create-information',
    check('information_type','Information type is required !').not().isEmpty(),
    check('message', 'Please enter a message to be posted').not().isEmpty(),
    check('uploaded_by','Uploader information is required!').not().isEmpty(),
    async (req, res, next) => {
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({success: false, errors: errors.array()});

            const { information_type, message, link, study_center_id, programme_id, regional_center_id, semester, uploaded_by } = req.body;

            const _informaion = new AnnoucementNews({
                information_type, message, link, study_center_id, programme_id, regional_center_id, semester, uploaded_by 
            });
            await _informaion.save();
            return res.json({ success: true, data:{ msg:'Announcement/News created successfully' }});
        } catch (e) {
            return res.status(500).json({success: false, errors: e});
        }
});

/*
* @route - POST /get-information
* @desc = API TO FETCH ALL INFORMATON based on the filter
* @access = protected
* */
router.post('/get-information', async (req, res, next) => {
    try{
        const { type,study_center_id, programme_id, regional_center_id, semester  } = req.body;
        let query = '';
        if(type){
            query = `information_type:${type}`;
        } else {
            query = `information_type:${'GLOBAL'}`;
        }
        if(study_center_id){
            query = query + `, study_center_id:${study_center_id}`; 
        }
        if(programme_id){
            query = query + `, programme_id:${programme_id}`;
        }
        if(regional_center_id){
            query = query + `, regional_center_id:${regional_center_id}`
        }
        if(semester){
            query = query + `, semester:${semester}`;
        }

        const _informaion = await AnnoucementNews.find({query});
        return res.json({ success : true, data: _informaion });
    } catch (e) {
        return res.status(500).json({success: false, errors: e});
    }
});


module.exports = router;