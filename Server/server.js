const express = require('express');
const bodyParser = require('body-parser');
const sH = require('./Controllers/controllers.js')
const app = express();

app.use(bodyParser.json());

app.get("/api/superheros", sH.read)
app.post("/api/superheros", sH.create)
app.put("/api/superheros/:id", sH.update)
app.delete("/api/superheros/:id", sH.delete)

app.listen(4000, () => console.log('listening on port 4000'))