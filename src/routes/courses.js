const express = require("express");
const router = express.Router();

const courseController = require('../app/controllers/courseController')

router.get('/:slug', courseController.courseController);
module.exports = router;
