const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route par défaut
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Port Azure ou local
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`SmartDesk MVP running on port ${port}`);
});