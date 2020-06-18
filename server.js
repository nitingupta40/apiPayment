const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/configurations', require('./routes/v2/configurations'));
app.use('/api/orders', require('./routes/v2/orders'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on  port ${PORT}`));
