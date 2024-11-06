const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

// Route lấy tất cả các tour
router.get('/tours', tourController.getAllTours);

// Route thêm tour mới
router.post('/tours', tourController.createTour);

// Route cập nhật tour theo ID
router.put('/tours/:id', tourController.updateTour);

module.exports = router;
