const express = require('express');
const app = express();
app.get('/api', (req, res) => res.json({ status: 'Backend Running' }));
app.listen(5000, () => console.log('Backend on port 5000'));