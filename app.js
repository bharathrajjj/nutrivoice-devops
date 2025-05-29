const express = require('express');
const app = express();
require('dotenv').config();
const mealsRoutes = require('./routes/meals');

app.use(express.json());
app.use('/api/meals', mealsRoutes);

// Health check
app.get('/health', (req, res) => res.status(200).json({ status: 'OK' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`NutriVoice API running on port ${PORT}`));

module.exports = app;
