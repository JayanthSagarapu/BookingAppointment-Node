// const express = require("express");
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const path = require("path");

// const userRoutes = require("./routes/user");
// app.use("/", userRoutes);

// const { sequelize, User } = require("./models/User");

// // const bodyParser = require("body-parser");
// // app.use(bodyParser.urlencoded({ extended: false }));

// const cors = require("cors");
// app.use(cors());

// const port = 8080;

// sequelize
//   .sync()
//   .then(
//     app.listen(port, () => {
//       console.log("done");
//     })
//   )
//   .catch((err) => {
//     console.log(err);
//   });

const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 8000;
const routes = require("./routes/user");
const { sequelize, User } = require("./models/User");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

sequelize.sync().then(
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
