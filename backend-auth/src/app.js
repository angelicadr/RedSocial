const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/db');
const initUsers = require('./seeders/initUsers');

dotenv.config();
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = 3000;

sequelize.sync({ force: true }).then(() => {
  console.log('DB sincronizada');
  initUsers();
  app.listen(PORT, () => console.log(`Servidor auth en puerto ${PORT}`));
});