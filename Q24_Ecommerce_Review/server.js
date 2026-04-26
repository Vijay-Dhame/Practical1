const express = require('express'); const mongoose = require('mongoose'); const cors = require('cors');
const app = express(); app.use(express.json()); app.use(cors());
mongoose.connect('mongodb://localhost:27017/rev_db');
const Schema = new mongoose.Schema({ item:String, brand:String, user:String, text:String, rate:String });
const Model = mongoose.model('Data', Schema);
app.get('/api', async (req, res) => res.json(await Model.find()));
app.post('/api', async (req, res) => { const item = new Model(req.body); await item.save(); res.json(item); });
app.listen(3000);