const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
app.use(cors());

/*var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));*/
const db = require("./app/models");

// Use this with force: true if you want to edit properly in this project
// db.sequelize.sync({ force: true });

db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend for Vent2Learn!" });
});

require("./app/routes/users.routes")(app);
require("./app/routes/rooms.routes")(app);
require("./app/routes/vents.routes")(app);
require("./app/routes/ventHistory.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
