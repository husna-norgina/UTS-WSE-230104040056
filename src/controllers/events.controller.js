const events = require('../data/events.data');

// GET all events
exports.getAllEvents = (req, res) => {
  res.json({ success: true, data: events });
};

// GET event by id
exports.getEventById = (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find(e => e.id === id);
  if (!event) return res.status(404).json({ success: false, message: 'Event not found' });
  res.json({ success: true, data: event });
};

// POST create new event
exports.createEvent = (req, res) => {
  const { title, date, location } = req.body;

  // Auto-increment id berdasarkan data terakhir
  const lastId = events.length > 0 ? events[events.length - 1].id : 0;
  const newId = lastId + 1;

  const newEvent = { id: newId, title, date, location };
  events.push(newEvent);

  res.status(201).json({ success: true, message: 'Event created', data: newEvent });
};

// PUT update event
exports.updateEvent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ success: false, message: 'Event not found' });

  const { title, date, location } = req.body;
  events[index] = { id, title, date, location };
  res.json({ success: true, message: 'Event updated', data: events[index] });
};

// DELETE event
exports.deleteEvent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ success: false, message: 'Event not found' });

  events.splice(index, 1);
  res.status(204).send();
};


// PATCH partial update
exports.patchEvent = (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find(e => e.id === id);
  if (!event) return res.status(404).json({ success: false, message: 'Event not found' });

  const { title, date, location } = req.body;
  if (title !== undefined) event.title = title;
  if (date !== undefined) event.date = date;
  if (location !== undefined) event.location = location;

  res.json({ success: true, message: 'Event partially updated', data: event });
};
