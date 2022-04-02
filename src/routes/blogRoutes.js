const express = require("express");
const router = express.Router();
const getHomePage = require('../app/controllers/homeController')
const getNewsPage = require('../app/controllers/newsController')
const getSearchPage = require('../app/controllers/searchController')

const blogRoutes = (app) => {
  router.get("/", getHomePage.homeController);

  router.get("/news", getNewsPage.newsController);

  router.get("/search", getSearchPage.searchController);

//   router.post("/search", (req, res) => {
//     res.send("");
//   });

  return app.use("/", router);
};

module.exports = blogRoutes;
