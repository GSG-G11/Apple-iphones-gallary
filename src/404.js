const path = require('path');

const notFound = (req, res) => {
  const file = path.join(__dirname, '..', 'public/404.html');
  res.status(404).sendFile(file);
};
module.exports = notFound;
