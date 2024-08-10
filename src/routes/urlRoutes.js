const express=require('express');
const urlController=require('../controllers/urlController');

const router=express.Router();

router.post('/shorten',urlController.shortenUrl);
router.get('/:shorten',urlController.redirectToOriginalUrl);

module.exports=router;
