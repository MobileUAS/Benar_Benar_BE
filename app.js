const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const allRoutes = require('./routes');
const db = require('./config/db');

async function startServer() {
  try {
    await db;
    console.log('berhasil terhubung ke database');

    app.use(cors());
    app.use(express.json({ limit: '150mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));

    app.use(allRoutes);

    app.get('/', (req, res) => {
      res.send('hello');
    });

    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

    app.listen(port, () => {
      console.log(`Aplikasi berjalan pada port ${port}`);
    });
  } catch (err) {
    console.error('gagal terhubung ke database', err);
  }
}

startServer();
