const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, 'src')));

// Fallback to 'index.html' for any other request
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/home.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/history.html'));
});

app.get('/investing', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/investing.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/profile.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/login.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
