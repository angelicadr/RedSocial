const express = require('express');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');
const sequelize = require('./config/db');
const initPosts = require('./seeders/initPosts');

dotenv.config();
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/api/posts', postRoutes);

const PORT = 3000;
sequelize.sync({ force: true }).then(() => {
  console.log('DB sincronizada en posts');
  initPosts();
  app.listen(PORT, () => console.log(`Servidor posts en puerto ${PORT}`));
});