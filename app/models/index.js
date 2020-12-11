const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE || 'vent2learndb',
  process.env.DB_USERNAME || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3307,
    dialect: "mysql"
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.rooms = require("./rooms.model.js")(sequelize, Sequelize);
db.vents = require("./vents.model.js")(sequelize, Sequelize);
db.ventHistory = require("./ventHistory.model.js")(sequelize, Sequelize);

module.exports = db;
