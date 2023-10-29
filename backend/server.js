const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:8080' }));
 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});