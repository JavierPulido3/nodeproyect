const express = require("express");
const app = express();
app.get('/', (req, res) => res.send('Tengo Hambre'));
app.listen(3000);

//24/09/2025 Cerdo