const novax = require('novaxjs2');
const app = new novax();
app.cors({
	origins: ['*']
});
app.get('/', (req, res) => {
  res.status(204).json({
    message: "No Content"
  });
});
app.at(3000, () => console.log('App is running on port 3000'));

// for vercel serverless
module.exports = (req, res) => {
  app.server.emit('request', req, res);
};