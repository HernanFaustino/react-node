const express = require('express');
const { getAllFiles, getFilesData } = require('../../controllers/fileController');

const router = express.Router();

router.get('/data', getFilesData);
router.get('/list', getAllFiles);

module.exports = router;
