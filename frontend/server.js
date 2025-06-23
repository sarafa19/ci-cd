const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('The SARAH FATIM Frontend Running'));
app.listen(3000, () => console.log('Frontend on port 3000'));