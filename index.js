const app = require("./src/app");
const { sequelize } = require('./src/db');

app.listen(3000, () => {
  sequelize.sync({alter: true});
  console.log("app is listening on port 3000");
});
