const Joi = require('joi');
const {
    createEvent: createEventModel,
    getEventById,
    updateEvent: updateEventModel,
    deleteEvent: deleteEventModel
} = require('../models/eventModel');

// Validation schema for event creation and update
const eventSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    start_date: Joi.date().timestamp('javascript').required(),
    close_registration: Joi.date().timestamp('javascript').required(),
    max_attendees: Joi.number().integer().min(1).required(),
    creator_id: Joi.number().integer().required()
});

// Create event
exports.createEvent = (req, res) => {
    const { error, value } = eventSchema.validate(req.body);
    if (error) return res.status(400).json({ error_message: error.details[0].message });

    createEventModel(value, (err, eventId) => {
        if (err) return res.status(500).json({ error_message: 'Database error while creating event' });
        res.status(201).json({ event_id: eventId, message: 'Event created successfully' });
    });
};

// Get event by ID
exports.getEvent = (req, res) => {
    const eventId = parseInt(req.params.id, 10);

    getEventById(eventId, (err, event) => {
        if (err || !event) return res.status(404).json({ error_message: 'Event not found' });
        res.status(200).json(event);
    });
};

// Update event
exports.updateEvent = (req, res) => {
    const { error, value } = eventSchema.validate(req.body);
    if (error) return res.status(400).json({ error_message: error.details[0].message });

    const eventId = parseInt(req.params.id, 10);
    updateEventModel(eventId, value, (err, changes) => {
        if (err || changes === 0) return res.status(400).json({ error_message: 'Failed to update event' });
        res.status(200).json({ message: 'Event updated successfully' });
    });
};

// Delete event
exports.deleteEvent = (req, res) => {
    const eventId = parseInt(req.params.id, 10);

    deleteEventModel(eventId, (err, changes) => {
        if (err || changes === 0) return res.status(400).json({ error_message: 'Failed to delete event' });
        res.status(200).json({ message: 'Event deleted successfully' });
    });
};