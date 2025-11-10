const express = require('express');
const morgan = require('morgan');
const app = express();

// Middleware global
app.use(morgan('dev'));
app.use(express.json());

// Routes import
const eventRoutes = require('./routes/events.routes');
app.use('/api/events', eventRoutes);

// Endpoint info
app.get('/api/info', (req, res) => {
  res.json({
    service: 'UTS Web Service Engineering',
    resource: 'events',
    author: 'Husna Norgina',
    nim: '230104040056',
    time: new Date().toISOString()
  });
});

// Error handler
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

// Server
app.listen(3000, () => console.log('Server running on port 3000'));
