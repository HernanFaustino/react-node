const express = require('express');
const v1FileRouter = require('./router/v1/fileRouter');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/files', v1FileRouter);

app.listen(PORT, () => {
  console.log(`Server linstening on port ${PORT}`);
});

module.exports = app;