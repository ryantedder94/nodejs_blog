const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const { urlencoded } = require("express");
const app = express();
const port = 3000;

const blogRoutes = require('./routes/blogRoutes');

app.use(express.static(path.join(__dirname, "public")));

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(morgan("combined"));

app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

blogRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
