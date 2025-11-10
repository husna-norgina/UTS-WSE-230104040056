const express = require('express');
const router = express.Router();
const validateEvent = require('../middlewares/validateEvent');
const eventController = require('../controllers/events.controller');

router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.post('/', validateEvent, eventController.createEvent);
router.put('/:id', validateEvent, eventController.updateEvent);
router.patch('/:id', eventController.patchEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
