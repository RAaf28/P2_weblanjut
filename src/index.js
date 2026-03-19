require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const beritaRoutes = require('./routes/beritaRoutes');
const app = express();
app.use(cors({
  origin: /^http:\/\/localhost(:\d+)?$/,
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type','Authorization']
}));
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', beritaRoutes);
app.use(bodyParser.json());
app.get('/', (req, res) => {
res.send('Server berjalan!');
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Server berjalan di port
${PORT}`));